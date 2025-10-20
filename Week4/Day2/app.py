from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy # type: ignore

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200))
    status = db.Column(db.String(20))
    due_date = db.Column(db.String(20))

with app.app_context():
    db.create_all()


@app.route('/')
def home():
    return jsonify({"message": "Task API is running ✅"})

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{
        "id": t.id,
        "title": t.title,
        "description": t.description,
        "status": t.status,
        "due_date": t.due_date
    } for t in tasks])

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({"error": "Title is required"}), 400
    task = Task(
        title=data['title'],
        description=data.get('description', ''),
        status=data.get('status', 'pending'),
        due_date=data.get('due_date', '')
    )
    db.session.add(task)
    db.session.commit()
    return jsonify({"message": "Task added successfully!"}), 201

@app.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    data = request.get_json()
    task.title = data.get('title', task.title)
    task.description = data.get('description', task.description)
    task.status = data.get('status', task.status)
    task.due_date = data.get('due_date', task.due_date)
    db.session.commit()
    return jsonify({"message": "Task updated successfully!"})

@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted successfully!"})


if __name__ == '__main__':
    app.run(debug=True)
