# Airzy - A Full Stack Airbnb Clone

**Airzy** is a full-stack web application developed to provide users with a platform to sign up, log in, and book Airbnbs for their stay. It is designed to be a simple and effective version of the popular Airbnb service, with the ability to upload listings, manage bookings, and provide a seamless user experience.

## Key Features
- **User Authentication & Authorization**: Secure sign-up, login, and logout functionality with session management using **Passport.js** and **Express Sessions**.
- **Flash Messages**: Instant notifications using **npm Flash** to inform users of successful actions, errors, or warnings (e.g., successful login or failed booking).
- **CRUD Operations**: Hosts can **Create**, **Read**, **Update**, and **Delete** Airbnb listings, allowing complete management of properties.
- **Data Security**: Passwords are securely hashed using **bcrypt** to ensure safe storage. Sessions are protected to maintain user privacy and prevent unauthorized access.
- **File Uploads**: Hosts can upload images for their listings using **Multer** and **Cloudinary** for storage, ensuring fast and efficient media management.

## Technologies Used
- **Frontend**:
  - HTML
  - CSS
  - JavaScript
  - EJS (Embedded JavaScript templating)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Database)
- **Libraries and npm Packages**:
  - **Multer**: For handling file uploads.
  - **Cloudinary**: For storing and managing uploaded images.
  - **Passport.js**: For handling user authentication and secure login sessions.
  - **Express Sessions**: For maintaining user sessions across requests.
  - **Flash**: For displaying flash messages to users (e.g., successful login, error, etc.).
  - **bcrypt**: For securely hashing user passwords.

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Trisha-05/airzy.git
```

### 2. Install Dependencies
Navigate to the project folder and install the necessary dependencies using npm:

```bash
cd airzy
npm install
```

### 3. Environment Variables
Before running the application, you’ll need to set up your environment variables. Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key_for_sessions
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Run the Application
To start the development server, run the following command:

```bash
npm start
```

The application will be available at `http://localhost:8080`.

## Project Structure
```
airzy/
│
├── models/               # Mongoose models (User, Listing, etc.)
├── public/               # Static files (CSS, JavaScript, Images)
├── routes/               # Express routes
├── views/                # EJS templates for rendering the frontend
├── .env                  # Environment variables for sensitive data
├── app.js                # Main entry point for the app
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## How It Works

1. **User Authentication & Authorization**:
   - Users can sign up by providing their email, password, and other required details. Passwords are hashed using **bcrypt** before being stored in the database.
   - **Passport.js** handles secure user authentication, and users can log in to access protected pages and make bookings.
   - Session management is handled using **Express Sessions** to ensure secure login and protect routes from unauthorized access.

2. **Airbnb Listings (CRUD Operations)**:
   - Hosts can create listings by providing details such as the property title, description, price, location, and images.
   - Listings can be updated or deleted by the host, ensuring that the listing data is always up-to-date.
   - **Multer** handles file uploads (such as images), and **Cloudinary** stores them for fast and reliable access.

3. **Flash Messages**:
   - **npm Flash** is used to display real-time flash messages to users. These messages alert users when actions are successful (e.g., after logging in, registering, or making a booking), or if there are errors (e.g., incorrect credentials or invalid data).

4. **Data Security**:
   - **bcrypt** is used for securely hashing passwords, ensuring that sensitive information is never stored in plain text.
   - User sessions are encrypted and handled by **Express Sessions** to prevent unauthorized access to user data.
   - **Passport.js** and **Express Sessions** work together to secure routes and ensure that only authenticated users can access certain features, such as booking listings or managing their own properties.

5. **Booking System**:
   - Users can search for available listings, view details, and make bookings directly from the website. The booking system ensures that hosts and users have a smooth experience managing their stays.

## Contributing
We welcome contributions to the project! If you find any bugs or want to suggest new features, feel free to open an issue or submit a pull request. 

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request with a description of your changes.

![Screenshot 2025-01-05 103842](https://github.com/user-attachments/assets/f3cd8076-9481-4164-a8c9-95b3f19f7817)
![Screenshot 2025-01-05 103858](https://github.com/user-attachments/assets/c655d9e1-2645-406f-862e-560275a5e3a7)
![Screenshot 2025-01-05 103620](https://github.com/user-attachments/assets/6171a422-8f1f-4219-89f7-e47d819c17fb)
![Screenshot 2025-01-05 103649](https://github.com/user-attachments/assets/c612dd27-2ef9-4d64-92b3-8db90d65844b)
![Screenshot 2025-01-05 103713](https://github.com/user-attachments/assets/7931e51e-d3b4-4dd3-92bd-1d27d6f6a5c8)
![Screenshot 2025-01-05 103730](https://github.com/user-attachments/assets/a10d82dc-deb3-4d00-a8b3-e75cecc12f72)
![Screenshot 2025-01-05 103817](https://github.com/user-attachments/assets/29b188bb-325c-4bad-a393-42fb6a8ae203)


