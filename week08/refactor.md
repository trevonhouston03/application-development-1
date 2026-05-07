# Refactor Improvements

## 1. Moved Validation Into Middleware
Before:
Validation logic was inside controllers.

After:
Validation was moved into reusable middleware.

Why:
This keeps controllers cleaner and separates responsibilities.

---

## 2. Improved Variable Names
Before:
Some variable names were short and unclear.

After:
More descriptive names were used like productIndex and newOrder.

Why:
Improves readability and makes code easier to understand.

---

## 3. Reduced Nested Conditionals
Before:
Some functions had multiple nested if statements.

After:
Used early returns for errors.

Why:
Makes functions shorter and easier to follow.