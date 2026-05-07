# API Documentation

## Products

### GET /products
Returns all products.

Status Codes:
- 200 OK

---

### GET /products/:id
Returns a single product.

Status Codes:
- 200 OK
- 404 Not Found

---

### POST /products

Request Body:
```json
{
  "name": "Laptop",
  "price": 1200
}
```

Success Response:
```json
{
  "id": 1,
  "name": "Laptop",
  "price": 1200
}
```

Error Responses:
```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "name and price are required"
  }
}
```

Status Codes:
- 201 Created
- 400 Bad Request
- 401 Unauthorized

---

### PATCH /products/:id

Request Body:
```json
{
  "price": 1000
}
```

Status Codes:
- 200 OK
- 404 Not Found

---

### DELETE /products/:id

Status Codes:
- 204 No Content
- 404 Not Found

---

# Orders

## GET /orders
Returns all orders.

## POST /orders

Request Body:
```json
{
  "userId": 1,
  "products": [1]
}
```

Status Codes:
- 201 Created
- 400 Bad Request