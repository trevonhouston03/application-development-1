## 1. Get All Products

Request:
GET /products

Response:
Status: 200 OK

[
  {
    "id": 1,
    "name": "Macbook",
    "price": 1200
  },
  {
    "id": 2,
    "name": " Iphone Charger",
    "price": 25
  }
]

---

## 2. Create a New Order

Request:
POST /orders

Body:
{
  "userId": 1,
  "products": [1, 2]
}

Response:
Status: 201 Created

{
  "orderId": 101,
  "userId": 1,
  "products": [1, 2],
  "status": "pending"
}

---

## 3. Update Order Status

Request:
PATCH /orders/101

Body:
{
  "status": "shipped"
}

Response:
Status: 200 OK

{
  "orderId": 101,
  "status": "shipped"
}