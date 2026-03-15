# Endpoints

## Products
- GET /products  
  Purpose: Get a list of all products  
  Status: 200 OK  

- GET /products/{productId}  
  Purpose: Get a single product  
  Status: 200 OK  

- POST /products  
  Purpose: Create a new product  
  Status: 201 Created  

- PUT /products/{productId}  
  Purpose: Update a product  
  Status: 200 OK  

- DELETE /products/{productId}  
  Purpose: Delete a product  
  Status: 204 No Content  

## Orders
- GET /orders  
  Purpose: List all orders  
  Status: 200 OK  

- GET /orders/{orderId}  
  Purpose: Get a single order  
  Status: 200 OK  

- POST /orders  
  Purpose: Create a new order  
  Status: 201 Created  

- PATCH /orders/{orderId}  
  Purpose: Update order status  
  Status: 200 OK  

- DELETE /orders/{orderId}  
  Purpose: Cancel an order  
  Status: 204 No Content  

## Users
- GET /users  
  Purpose: List all users  
  Status: 200 OK  

- GET /users/{userId}  
  Purpose: Get a single user  
  Status: 200 OK  

- POST /users  
  Purpose: Create a new user  
  Status: 201 Created  

- PUT /users/{userId}  
  Purpose: Update user info  
  Status: 200 OK  

- DELETE /users/{userId}  
  Purpose: Delete a user  
  Status: 204 No Content
