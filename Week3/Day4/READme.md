# Week 3 – Day 4: API Documentation, Deployment, and Versioning
## Task Objective

To document and version the existing Workout Task API using Swagger (Flask-RESTX), and test it locally with proper API versioning and error handling.

## Steps Followed
### Project Setup

- Created a new folder named Week3/Day4.
- Opened it in VS Code.
- Created and activated a Python virtual environment using PowerShell.

### Installed Dependencies

**Installed the required libraries:**
```bash
Flask – for the backend
Flask-RESTX – for API versioning and Swagger documentation
Flask-CORS – to allow frontend connections
Verified installation using pip freeze > requirements.txt.
```

### API Development

- Created an app.py file.
- Defined versioned API routes using /api/v1/tasks.
- Added CRUD operations:
```bash
GET – List or filter tasks
POST – Add new task
PUT – Update existing task
DELETE – Remove task
```
Added input validation, response codes, and error messages.
Configured Swagger UI for API documentation.

### Versioning

Used the route prefix /api/v1 to define the first version of the API.

This allows easier updates for future versions like /api/v2.

### Enabled Swagger Documentation

Integrated Swagger UI using flask-restx.

Documentation automatically generated at:
```bash
http://127.0.0.1:5000/apidocs
```
### Running the Server

Started the Flask development server using:
```bash
python app.py
```

Confirmed it was running successfully on:
**http://127.0.0.1:5000/**

---
![screenshot](./Images/w3d4a.PNG)
---

### Testing the Endpoints
Swagger UI
```bash
Opened http://127.0.0.1:5000/apidocs
```
Viewed all available API routes.

Tested each route interactively within the Swagger interface.

### Postman Tests

Tested the following routes manually:

Action	Method	URL

Add new task	POST	http://127.0.0.1:5000/api/v1/tasks/
---
![screenshot](./Images/w3d4b.PNG)
---
Get a task by ID	GET	http://127.0.0.1:5000/api/v1/tasks/1
---
![screenshot](./Images/w3d4c.PNG)
---
Update task	PUT	http://127.0.0.1:5000/api/v1/tasks/1
---
![screenshot](./Images/w3d4e.PNG)
---
Delete task	DELETE	http://127.0.0.1:5000/api/v1/tasks/1
---
![screenshot](./Images/w3d4d.PNG)
---

### Common Issue Fixed

When hitting the root / URL, got the message:
```bash
{ "error": "Resource not found" }
```

→ Fixed by using the correct versioned path /api/v1/tasks/.

### Final Verification

- Verified all CRUD operations worked correctly.
- Swagger UI showed documentation and allowed API testing.
- Postman returned valid JSON responses for all endpoints.