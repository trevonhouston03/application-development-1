# Final Project - Task Manager API

## Project Description

This project is a backend Task Manager API built with Express and SQLite(different app than usual). The API allows users to log in, create tasks, update tasks, delete tasks, and view their own tasks. The project also includes authentication, authorization, protected routes, session handling, and error handling.

The API uses role-based and ownership-based authorization to control access to resources.

---

## Features

- Express backend server
- SQLite database integration
- Session-based authentication
- Login and logout system
- Protected routes
- Role-based authorization
- Ownership-based authorization
- CRUD operations for tasks
- Consistent JSON error responses

---

## Technologies Used

- Node.js
- Express
- express-session
- SQLite
- sqlite3

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Navigate Into the Project Folder

```bash
cd application-development-1/final-project
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node server.js
```

The server should start on:

```text
http://localhost:3000
```

---

## How to Run the Server

Run this command inside the final-project folder:

```bash
node server.js
```

---

## API Endpoint List

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /login | Login user |
| POST | /logout | Logout user |
| GET | /profile | Get logged in user profile |
| GET | /tasks | Get all tasks for logged in user |
| GET | /tasks/:id | Get a single task |
| POST | /tasks | Create a new task |
| PATCH | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

---

## Example Login Credentials

### Admin User

```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

### Regular User

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

## Error Response Format

All errors return JSON in this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

---

## Example Responses

### Successful Login

```json
{
  "message": "Login successful.",
  "user": {
    "email": "user@example.com",
    "role": "user"
  }
}
```

### Unauthorized Request

```json
{
  "error": {
    "code": "NOT_AUTHENTICATED",
    "message": "You must be logged in."
  }
}
```

### Forbidden Request

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "You do not own this task."
  }
}
```