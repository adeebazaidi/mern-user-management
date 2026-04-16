
👤 User Management System (MERN Stack)

A full-stack User Management System built using the MERN stack that provides secure authentication, role-based access control (RBAC), and complete user management features. The system supports Admin and User roles with protected routes and deployment on cloud platforms.

🌐 Live Links
🔗 Frontend: https://mern-user-management-beta.vercel.app/
🔗 Backend API: https://mern-user-management-e7b9.onrender.com

📌 Features

🔐 Authentication
User login using email and password
JWT-based authentication
Secure password hashing using bcrypt
Protected routes using middleware

🛡️ Role-Based Access Control (RBAC)
Admin
Full access to all users
Create, update, delete users
View all users
User
View own profile only
Update own profile
No access to admin routes

👥 User Management (CRUD)
Create user (Admin only)
View all users (Admin only)
View single user
Update user details
Delete / deactivate user (Admin only)
🧾 User Profile
View personal profile
Update name and password
Restricted access based on role

🧱 Tech Stack
Frontend
React.js (Hooks)
React Router DOM
Axios
Context API (or state management used)
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
bcrypt.js
Deployment
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas

📁 Project Structure

mern-user-management/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── App.js
│
└── README.md

🚀 Installation & Setup
1. Clone Repository
git clone https://github.com/your-username/mern-user-management.git
cd mern-user-management
2. Backend Setup
cd backend
npm install
npm run dev
3. Frontend Setup
cd frontend
npm install
npm start

🔗 API Endpoints
Auth Routes
POST /api/auth/register
POST /api/auth/login
User Routes (Protected)
GET    /api/users        (Admin only)
GET    /api/users/:id    (Admin/User)
POST   /api/users        (Admin only)
PUT    /api/users/:id    (Admin/User)
DELETE /api/users/:id    (Admin only)

🔐 Security Features
JWT authentication for secure sessions
Role-based access control (RBAC)
Password hashing using bcrypt
Input validation on backend
Protected API routes
Sensitive data excluded from responses

📦 Deployment
Frontend (Vercel)
Hosted on Vercel
React Router configured with SPA routing
Backend (Render)
Node.js server deployed on Render
Connected to MongoDB Atlas
Environment variables configured securely

👤 User Roles
Admin
Full control over users
Manage all CRUD operations
Access admin dashboard
User
View own profile
Update personal details
No access to admin features
📈 Future Improvements
Pagination and search for users
Refresh token authentication
Audit logs (createdBy, updatedBy)
Email verification system
Advanced admin dashboard analytics

👨‍💻 Author
Adeeba Fatima Zaidi
BTech CSE (AI & ML)
GitHub: https://github.com/adeebazaidi

⭐ Summary

This project demonstrates:

Full-stack MERN development
Secure authentication system
Role-based access control (RBAC)
RESTful API design
Cloud deployment (Vercel + Render)
Clean and scalable architecture
