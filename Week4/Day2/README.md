# **Week 4 – Day 2**

---

## **Topic:**  
### *DB Integration; ORM vs Direct SQL*

---

## **Task Objective**
*Implement a Flask backend connected to an SQLite database using SQLAlchemy ORM, and perform CRUD (Create, Read, Update, Delete) operations tested through Postman.*

---

## **Folder Structure**
Week4/
└── Day2/
    ├── app.py
    ├── tasks.db
    ├── venv/
    └── README.md

---

## **Files Description**

### **1️⃣ app.py**
* Contains Flask app setup, SQLAlchemy configuration, and API endpoints for CRUD operations.  
* Handles task creation, reading, updating, and deletion with JSON responses.*

---

### **2️⃣ tasks.db**
* SQLite database automatically generated when the app runs.  
* Stores task data such as **id**, **title**, **description**, **status**, and **due_date**.*

---

### **3️⃣ venv/**
* Virtual environment folder containing required dependencies like Flask and SQLAlchemy.*

---

## **Steps to Run**

### **Step 1 — Activate Virtual Environment**
.\venv\Scripts\Activate.ps1

yaml
Copy code

---

### **Step 2 — Install Required Libraries**
pip install flask flask_sqlalchemy

yaml
Copy code

---

### **Step 3 — Run the Application**
python app.py

lua
Copy code

*Expected output:*
Running on http://127.0.0.1:5000

yaml
Copy code

---

## **Postman Testing**

### **1️⃣ Check API is Running**
**GET**
http://127.0.0.1:5000/

yaml
Copy code

---

### **2️⃣ Add a New Task**
**POST**
http://127.0.0.1:5000/tasks

css
Copy code
**Body (raw JSON):**
{
"title": "Morning Workout",
"description": "50 squats and 30 pushups",
"status": "pending",
"due_date": "2025-10-21"
}

yaml
Copy code

---

### **3️⃣ View All Tasks**
**GET**
http://127.0.0.1:5000/tasks

yaml
Copy code

---

### **4️⃣ Update a Task**
**PUT**
http://127.0.0.1:5000/tasks/1

css
Copy code
**Body:**
{
"status": "completed"
}

yaml
Copy code

---

### **5️⃣ Delete a Task**
**DELETE**
http://127.0.0.1:5000/tasks/1

yaml
Copy code

---

## **Expected Responses**
{
"message": "Task added successfully!"
}

Copy code
[
{
"id": 1,
"title": "Morning Workout",
"description": "50 squats and 30 pushups",
"status": "completed",
"due_date": "2025-10-21"
}
]

yaml
Copy code

---

## **Screenshots**

### *1️⃣ Flask Server Running*
![Flask Running](./screenshots/flask_running.png)

### *2️⃣ Task Added in Postman*
![Task Added](./screenshots/task_added.png)

### *3️⃣ View All Tasks*
![View Tasks](./screenshots/view_tasks.png)

### *4️⃣ Database View in SQLite*
![Database View](./screenshots/database_view.png)

---

## **Outcome**
* Successfully connected Flask with SQLite using SQLAlchemy ORM.  
* Implemented CRUD operations and tested them through Postman.  
* Verified persistent data storage in `tasks.db`.  
* Learned practical differences between ORM and raw SQL integration in Flask.*

---