# E-Commerce Storefront

A modern, full-stack e-commerce platform built with React and Express.js, featuring a responsive frontend powered by Vite and TailwindCSS, paired with a robust backend for product management, user authentication, and payment processing.

## Project Overview

This e-commerce storefront application provides a complete shopping experience with the following key features:

- **Product Catalog**: Browse and search through a comprehensive collection of products
- **User Authentication**: Secure login and registration system with JWT-based authentication
- **Shopping Cart**: Full-featured cart management with real-time updates
- **Payment Integration**: Multiple payment methods including Stripe and Razorpay
- **Order Management**: Track orders and view order history
- **Responsive Design**: Mobile-first design that works across all devices
- **Admin Capabilities**: Administrative features for product and order management

---

## Architecture

This project follows a **Client-Server Architecture** with clear separation of concerns between the frontend and backend layers.

### Frontend Architecture

**Technology Stack**: React 19, Vite, TailwindCSS, React Router DOM

**Key Components**:
- **Framework**: React 19 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: TailwindCSS with PostCSS for utility-first CSS
- **Routing**: React Router DOM v7 for client-side navigation
- **State Management**: React Context API (ShopContext) for global state management
- **Notifications**: React Toastify for user-friendly toast notifications
- **Linting**: ESLint for code quality and consistency

**Features**:
- Component-based architecture for reusability
- Context API for managing global shopping state
- Client-side routing with dynamic product pages
- Responsive layouts with TailwindCSS
- SEO optimization with meta tags


### Backend Architecture(MVC)

**Technology Stack**: Node.js, Express.js, MongoDB, Mongoose

**Key Components**:
- **Framework**: Express.js 5.2 for RESTful API development
- **Database**: MongoDB with Mongoose ODM for data modeling
- **Authentication**: JWT (JSON Web Tokens) for secure API authentication
- **Authorization**: Role-based access control with bcrypt password hashing
- **File Uploads**: Multer for handling image uploads with Cloudinary integration
- **Payment Processing**: Stripe and Razorpay integration for transaction handling
- **Validation**: Validator.js for input validation and sanitization
- **Environment Management**: dotenv for configuration management
- **Development**: Nodemon for hot-reload during development


**API Design**:
- RESTful API architecture following best practices
- Middleware-based request processing pipeline
- Centralized error handling
- Modular controller-based route organization
- Database abstraction with Mongoose schemas

**Features**:
- User authentication and authorization
- Product CRUD operations
- Order processing and management
- Payment gateway integration
- Image upload and cloud storage
- Data validation and sanitization
- CORS support for cross-origin requests

---

## Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool
- **TailwindCSS** 3.4.18 - CSS framework
- **React Router DOM** 7.10.1 - Routing
- **React Toastify** 11.0.5 - Notifications
- **ESLint** - Code linting

### Backend
- **Node.js** - Runtime environment
- **Express.js** 5.2.1 - Web framework
- **MongoDB** - Database
- **Mongoose** 9.0.0 - ODM
- **JWT** 9.0.3 - Authentication
- **Bcrypt** 6.0.0 - Password hashing
- **Stripe** 20.3.0 - Payment processing
- **Razorpay** 2.9.6 - Alternative payment gateway
- **Cloudinary** 2.9.0 - Image storage
- **Multer** 2.0.2 - File uploads
- **CORS** 2.8.6 - Cross-origin support

---

## Installation

### Prerequisites
- Node.js (v20.x or v22.x recommended)
- npm or yarn
- MongoDB instance (local or cloud)
- Git

### Clone the Repository
```bash
git clone https://github.com/siddique-afridi/Ecommerce-Website.git
cd e-Commerce storefront
```

## Project Structure

```
e-Commerce storefront/
├── backend/                 # Node.js/Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── index.js
│   └── package.json
├── frontend/                # React/Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── eslint.config.js
│   └── package.json
├── vercel.json              # Vercel deployment config
└── README.md
```
