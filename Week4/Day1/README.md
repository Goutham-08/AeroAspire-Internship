Week 5 – Day 1
Topic: SQL Basics — Tables, Relations, Schema Design
Task:

Design schema for tasks: fields such as id, title, description, status, due_date; create tables.

# Folder Structure
Week5/
└── Day1/
    ├── schema.sql
    ├── create_db.py
    ├── tasks.db
    └── README.md

# Files Description
## 1. schema.sql

Defines the database schema and table structure for tasks with columns:

id — integer, primary key, auto-increment

title — text, required

description — text, optional

status — text, must be either pending or completed

due_date — text (date in string format)

## 2. create_db.py

Connects to SQLite database (tasks.db)

Executes SQL commands from schema.sql

Inserts three sample tasks

Prints all records to verify data insertion

## 3. tasks.db

Auto-generated SQLite database file that stores the tasks table and sample data

# Steps to Reproduce
## Step 1 — Open Folder

Navigate to:

C:\Users\gouth\OneDrive\Documents\AeroAspire-Internship\Week5\Day1

## Step 2 — Create Schema

Create a file named schema.sql

Define your table structure for tasks as per requirements

## Step 3 — Create Database Script

Create create_db.py

Read and execute SQL from schema.sql

Insert three sample records into the database

## Step 4 — Run Script

Run the script in VS Code terminal using:

python create_db.py

## Step 5 — Verify Output

The terminal should display:

Database and table created successfully!
3 sample tasks added successfully!

Tasks in database:
(1, 'Morning Workout', 'Do 50 squats and 30 lunges', 'pending', '2025-10-20')
(2, 'Evening Run', 'Run 5 kilometers in the park', 'completed', '2025-10-19')
(3, 'Yoga Session', 'Attend online yoga class', 'pending', '2025-10-21')

## Step 6 — Confirm Using SQLite Viewer (Optional)

Open tasks.db in any SQLite viewer such as:
https://sqliteviewer.app

Visually confirm that the tasks table and all inserted rows exist.


# Screenshots
## 1. Database Table Created

(insert your screenshot here)
![Database Created](./screenshots/db_created.png)

## 2. Tasks Added Successfully

(insert your screenshot here)
![Tasks Added](./screenshots/tasks_added.png)

# Outcome

Successfully designed and created an SQL schema for tasks.

Verified database creation and insertion of three sample records.

Learned basics of schema design, primary keys, constraints, and table creation using SQLite.