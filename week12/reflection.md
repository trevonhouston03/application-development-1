# Reflection

## What is the difference between authentication and authorization?
Authentication is basically the user's identity. Authorization is what the user is allowed to do.

## Why does /admin return 403 for a regular user instead of 401?
It returns 403 instead of 401 because the user is already logged in. They just don't have permission to access the admin route.

## Why is ownership checking important?
Ownership checking is important because prevents users from accessing or changing data that belongs to someone else.

## What is the difference between role-based access and ownership-based access?
Role-based access depends on the user’s role like admin or user. Ownership-based access depends on who owns the actual resource.

## Why should authorization checks happen on the server instead of the client?
Authorization checks must happen on the server because users can change or bypass client-side code.