# Request Lifecycle

## 1. Valid POST /products (correct API key)
- timer middleware starts timing
- apiKey middleware checks header (passes)
- validateProduct checks body (passes)
- controller runs and creates product
- response is sent
- timer logs total time

Execution order:
timer → apiKey → validateProduct → controller → response → timer log


## 2. POST /products missing required field
- timer starts
- apiKey passes
- validateProduct fails
- returns 400 error
- controller does NOT run
- timer still logs time


## 3. POST /products missing API key
- timer starts
- apiKey middleware blocks request
- returns 401 error immediately
- validation and controller never run
- timer logs time