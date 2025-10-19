# Week 4 – Day 4
## Topic: Migrations; DB Setup Scripts & Seed Data

### Task

- Learn and use Flask-Migrate or a simple script to seed the database and apply migrations when the schema changes.

---

## Folder Structure
Week4/
└── Day4/
    ├── app.py
    ├── models.py
    ├── extensions.py
    ├── seed_data.py
    ├── tasks.db
    ├── migrations/
    ├── venv/
    └── README.md
---

## Objective

- Integrate Flask with SQLAlchemy and Flask-Migrate.

- Apply database migrations using Flask-Migrate.

- Seed the database with initial tasks.

- Verify database changes and CRUD operations in Postman.

---

## Steps Followed
### Step 1 — Environment Setup

Created and activated a virtual environment using:

python -m venv venv  
venv\Scripts\activate


Installed required packages:

pip install flask flask_sqlalchemy flask_migrate

### Step 2 — Project Files

extensions.py — initialized SQLAlchemy instance.

models.py — defined Task model with columns (id, title, description, status, due_date).

app.py — main Flask app with routes and migration setup.

seed_data.py — added initial sample tasks using app.app_context().

### Step 3 — Migrations

Initialized and applied migrations using:

flask db init  
flask db migrate -m "Initial migration"  
flask db upgrade

### Step 4 — Seed Data

Ran the script to add three sample tasks:

python seed_data.py


### Output in terminal:

 3 Sample Tasks Added Successfully!

### Step 5 — Run Server

Started the Flask app:

python app.py


Local server URL: http://127.0.0.1:5000

### Step 6 — Testing in Postman
#### GET All Tasks

Method: GET

URL: http://127.0.0.1:5000/tasks

#### POST New Task

Method: POST

URL: http://127.0.0.1:5000/tasks

#### Body (JSON):

{
  "title": "Evening Stretch",
  "description": "15-minute stretch routine",
  "status": "pending",
  "due_date": "2025-10-25"
}

#### Expected Response
{
  "message": "Task added successfully!"
}
---

## Screenshots



 - Successfully implemented database migrations using Flask-Migrate.

 - Seeded initial records into the SQLite database.

 - Verified CRUD operations through Postman.

 - Learned how to maintain and update database schemas safely with migrations.