# Week 3 – Day 5
Topic: Reflection & Bonus
Task: Authentication (Token-Based), Logging, and Unit Testing
---
# Objective

- Implement token-based authentication using JWT.

- Add logging to record API events.

- Write unit tests to validate endpoints.

# Folder Structure
Day5/
│
├── app.py
├── test_app.py
├── requirements.txt
└── README.md

# Steps Followed
## Step 1: Create and set up the environment

- Created and activated a virtual environment using PowerShell:

- python -m venv venv
- .\venv\Scripts\Activate.ps1

- Installed required libraries:

- pip install flask flask-jwt-extended pytest

## Step 2: Created main Flask file

- Added the main application logic, including JWT authentication, protected routes, and logging inside app.py.

- Configured secret key and token-based authentication.

- Added logging configuration to store logs in app.log.

## Step 3: Created testing file

- Added test_app.py to verify authentication, route protection, and data flow using pytest.

## Step 4: Running the app

- Started the Flask server:

- python app.py


- Verified that Flask was running at:

- http://127.0.0.1:5000/

## Step 5: Testing API in Postman

- Generated a token via login endpoint (/login).

- Added Authorization: Bearer <token> header in Postman.

- Verified the following endpoints worked correctly:

- GET /protected → returns authorized response.

- POST /data → accepts new data entries with authentication.

## Step 6: Testing with Pytest

- Executed tests using:

- pytest -v

- Confirmed all tests passed successfully.

# Output Verification

- Token successfully generated.

- Authorized routes accessible with valid token.

- Unauthorized access blocked.

- Logs created in app.log.

- Unit tests passed without errors.

# Screenshots to Attach

- Screenshot of token-based authentication in Postman.

- Screenshot of test results showing all tests passed.

# Conclusion

- Successfully implemented token-based authentication, logging, and unit testing.

- Verified endpoints in Postman and confirmed complete working setup.