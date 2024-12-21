
# Car Store  
# Link- https://car-store-amber.vercel.app/

# Blogging Platform Backend

## Overview
The Blogging Platform is a backend application designed to facilitate a blogging system where users can create, update, and delete their blogs. The platform supports two user roles: Admin and User, each with specific permissions. The application is built using TypeScript, Node.js, Express.js, and MongoDB with Mongoose.

## Features
- **User Roles**:
  - **Admin**: 
    - Manages users and blogs.
    - Can block users and delete any blog.
  - **User**: 
    - Registers and logs in.
    - Can create, update, and delete their own blogs.

- **Authentication & Authorization**:
  - Secure authentication using JWT.
  - Role-based access control to differentiate between Admin and User actions.

- **Blog API**:
  - Public API for reading blogs with search, sort, and filter functionalities.

## API Endpoints
### Authentication
- **Register User**: `POST /api/auth/register`
- **Login User**: `POST /api/auth/login`

### Blog Management
- **Create Blog**: `POST /api/blogs`
- **Update Blog**: `PATCH /api/blogs/:id`
- **Delete Blog**: `DELETE /api/blogs/:id`
- **Get All Blogs**: `GET /api/blogs`

### Admin Actions
- **Block User**: `PATCH /api/admin/users/:userId/block`
- **Delete Blog**: `DELETE /api/admin/blogs/:id`

## Models
### User Model
- `name`: string
- `email`: string
- `password`: string
- `role`: "admin" | "user"
- `isBlocked`: boolean
- `createdAt`: Date
- `updatedAt`: Date

### Blog Model
- `title`: string
- `content`: string
- `author`: ObjectId
- `isPublished`: boolean
- `createdAt`: Date
- `updatedAt`: Date

## Error Handling
The application implements structured error handling to provide meaningful feedback for various error types, including validation errors, authentication errors, and internal server errors.

## Technologies Used
- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the necessary environment variables (e.g., `JWT_SECRET`, `JWT_EXPIRES_IN`, MongoDB connection string).

4. Start the server:
   ```bash
   npm start
   ```

## Conclusion
This backend application provides a robust foundation for a blogging platform, ensuring secure user authentication and role-based access control. The API is designed to be user-friendly and efficient, allowing for easy integration with a frontend application.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
