# Code Review Reflection

## Hardest Parts to Read
The controllers were the hardest part to read especially when validation and error handling were mixed together.

## Duplicate Logic
Error responses and validation checks were repeated in multiple places.

## Naming Improvements
I changed vague variable names into more descriptive names to make the code easier to understand.

## Missing Documentation
The API endpoints and response formats were not documented clearly before so that was the missing documentation

## What Could Confuse Another Developer
Another developer might be confused about middleware order and how the API key middleware works if there was no documentation.