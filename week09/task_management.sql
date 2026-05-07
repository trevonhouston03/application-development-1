CREATE DATABASE task_management_db;

USE task_management_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

INSERT INTO users (name, email)
VALUES
('Trevon Houston', 'trevon@email.com'),
('Jordan Miles', 'jordan@email.com'),
('Chris Lee', 'chris@email.com');

INSERT INTO projects (name, description, user_id)
VALUES
('Fitness App', 'Track workouts and progress', 1),
('E-Commerce Site', 'Online shopping platform', 2),
('Task Manager', 'Manage daily tasks', 3);

INSERT INTO tasks (title, status, project_id)
VALUES
('Design homepage', 'completed', 2),
('Create login page', 'in progress', 2),
('Build dashboard', 'completed', 1),
('Add task feature', 'pending', 3),
('Fix bugs', 'completed', 1);

SELECT * FROM users;

SELECT * FROM projects;

SELECT * FROM tasks;

SELECT
    tasks.title,
    tasks.status,
    projects.name AS project_name
FROM tasks
JOIN projects
ON tasks.project_id = projects.id;

SELECT
    projects.name AS project_name,
    users.name AS user_name
FROM projects
JOIN users
ON projects.user_id = users.id;

SELECT * FROM tasks
WHERE status = 'completed';

SELECT * FROM tasks
ORDER BY title ASC;