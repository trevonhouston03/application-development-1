# Middleware Order Experiment

## Change made
The change i made was moving the API key middleware after the routes instead of before them.

## What broke
The API key was no longer protecting the POST, PATCH, and DELETE routes.

## Why it broke
Middleware runs in order. Since the controller executed first, requests were processed before authentication.

## Error (if any)
No errors occured

## Fix
I moved the API key middleware before the route handlers so it runs first.