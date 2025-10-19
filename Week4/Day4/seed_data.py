from app import app, db
from models import Task

# Use app context to avoid "Working outside of application context"
with app.app_context():
    # Add seed data
    task1 = Task(title="Morning Workout", description="Do 50 pushups and 50 squats", status="completed", due_date="2025-10-21")
    task2 = Task(title="Evening Run", description="Run 5km around the park", status="pending", due_date="2025-10-22")
    task3 = Task(title="Yoga Session", description="30 mins of meditation", status="pending", due_date="2025-10-23")

    db.session.add_all([task1, task2, task3])
    db.session.commit()

    print("✅ Seed data added successfully!")
