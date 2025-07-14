# Yuga AI Backend

This is the backend server for the **Yuga AI** platform. It provides RESTful APIs for managing users, authentication, and various data-driven features related to NCERT-based education and AI tools.

## 🚀 Features

- User registration and login (JWT-based)
- Google OAuth integration
- Role-based access control (Admin, User)
- Course and lesson APIs (NCERT 10th-grade)
- Secure password reset with email
- Modular controller-service architecture
- MongoDB with Mongoose
- Error handling and input validation

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Nodemailer** for email notifications
- **Google OAuth2**
- **dotenv** for environment configuration

## 📁 Project Structure

yuga-ai-backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── utils/
├── config/
├── .env
└── server.js

## ⚙️ Setup Instructions

1. **Clone the repo**:
   ```bash
   git clone https://github.com/Yuga-Ai-1125/yuga-ai-backend.git
   cd yuga-ai-backend
   ```

Install dependencies:
npm install

.env file
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

Strat the server
npm run dev
