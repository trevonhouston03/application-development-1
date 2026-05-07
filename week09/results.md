# Task Management Database

This database represents a task management system where users can create projects and projects can contain multiple tasks.

## Tables Created
- users
- projects
- tasks

## Relationships
Each project belongs to one user through the user_id foreign key.

Each task belongs to one project through the project_id foreign key.

## Primary Key
A primary key is a unique identifier for each row in a table. Each table uses an id column as the primary key.

## Foreign Key
A foreign key creates a relationship between tables. In this database, user_id and project_id connect related records together.