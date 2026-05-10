# Reflection

## What is a session?
A session is a way for the server to remember a user after they log in.

## What does the server store?
The server stores the user's information in the session.

## What does the client store?
The client stores a session cookie in the browser.

## Why does /profile fail before login?
It fails because there is no session yet therefore the server does not know who the user is.

## Why does /profile work after login?
It works because the login route creates a session and stores the user information.

## Why does /profile fail again after logout?
It fails again because logout destroys the session.