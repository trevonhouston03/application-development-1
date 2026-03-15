# Design Decisions

- I chose these resources(products, orders, and users) because they are the core elements of an e-commerce system.
- PUT is used for full updates like updating all product information while PATCH is used for partial updates like changing order status.
- The API avoids breaking clients by keeping consistent endpoint paths and returning standard status codes.
- Tradeoff: I didn’t include authentication yet but it will be added later
