# Store API

## Project Overview
This API manages products and orders for a small online store. Users can create, update, retrieve, and delete products and orders.

### Target Users
- Customers
- Store admins

### Core Resources
- Products
- Orders

---

## Setup Instructions

### Install Dependencies
npm install

### Start Server
npm start

### Run Linter
npm run lint

### Environment Variables
No environment variables are required.

---

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| GET | /products | Get all products |
| GET | /products/:id | Get single product |
| POST | /products | Create product |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |
| GET | /orders | Get all orders |
| GET | /orders/:id | Get single order |
| POST | /orders | Create order |
| PATCH | /orders/:id | Update order |
| DELETE | /orders/:id | Delete order |

---

## Example Requests

### Successful POST
POST /products

```json
{
  "name": "Laptop",
  "price": 1200
}
```

Response:
```json
{
  "id": 1,
  "name": "Laptop",
  "price": 1200
}
```

---

### Validation Error

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "name and price are required"
  }
}
```

---

### 401 Error

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```