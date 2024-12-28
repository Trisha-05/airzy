const { query } = require("express");
const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
// const geocodingClient=mbxGeocoding({ accessToken : mapToken });

module.exports.index=async (req,res) => {
    const allListings =await  Listing.find({});
    res.render("listings/index.ejs",{allListings});
 };

 module.exports.renderNewForm=(req,res) =>{
    console.log(req.user);
     res.render("listings/new.ejs");
 };

 module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).
    populate({
       path:"reviews",
       populate:{
           path:"author",
       },
   })
   .populate("owner");
    if(!listing){
       req.flash("error","Listing you requested for doesn't exsist");
       res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
};

module.exports.createListing=async (req,res,next)=> {
//     let response = await geocodingClient
//     .forwardGeocode({
//         query:req.body.listing.location,
//         limit:1,
//     })
//     .send();

// console.log(response);
// res.send("done");

    let url=req.file.path;
    let filename=req.file.filename;
    console.log(url,"..",filename);
    const newListing= new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image={url, filename};
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
       req.flash("error","Listing you requested for doesn't exsist");
       res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing=async (req,res)=>{
    let {id} =req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined"){
    let url= req.file.path;
    let filename= req.file.filename;
    listing.image={url, filename};
    await listing.save();    
}

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
 };

 module.exports.destroyListing=async (req,res) => {
    let {id} =req.params;
    let deletedlisting= await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};

module.exports.filter = async(req,res,next)=>{
    // let {q} = req.query;
    let {id} = req.params;
    let allListings = await Listing.find({category: id});
    // console.log(allListing)
    if(allListings.length != 0){
        res.render("listings/index.ejs", { allListings,id });
    }else{
        req.flash("error","Listings is not here")
        res.redirect("/listings")
    }
}