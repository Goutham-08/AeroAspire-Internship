# app.py
from flask import Flask, jsonify
from flask_cors import CORS
from models import db, Task

app = Flask(__name__)
CORS(app)

# Database config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize db with app
db.init_app(app)

@app.route('/')
def home():
    return jsonify({"message": "DB-backed API connected successfully"})

@app.route('/tasks', methods=['GET'])
def get_tasks():
    try:
        tasks = Task.query.all()
        if not tasks:
            return jsonify({"message": "No tasks available"}), 200

        task_list = [
            {
                "id": t.id,
                "title": t.title,
                "description": t.description,
                "status": t.status,
                "due_date": t.due_date
            }
            for t in tasks
        ]
        return jsonify(task_list)
    except Exception as e:
        return jsonify({"error": "Database error occurred", "details": str(e)}), 500


if __name__ == '__main__':
    with app.app_context():
        db.create_all()

        # Seed only if empty
        if not Task.query.first():
            sample_tasks = [
                Task(title="Morning Run", description="5km jog in park", status="pending", due_date="2025-10-22"),
                Task(title="Yoga Session", description="Attend yoga class", status="completed", due_date="2025-10-21"),
                Task(title="Gym Workout", description="Leg day exercises", status="pending", due_date="2025-10-23"),
            ]
            db.session.add_all(sample_tasks)
            db.session.commit()

    app.run(debug=True)
