from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy # type: ignore
from datetime import date

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- Model ---
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200))
    status = db.Column(db.String(20), default="pending")
    due_date = db.Column(db.String(20))

# --- Create the table ---
with app.app_context():
    db.create_all()

# --- Default route ---
@app.route('/')
def home():
    return jsonify({"message": "Task API with Filtering & Search running ✅"})

# --- Get tasks with filters/search ---
@app.route('/tasks', methods=['GET'])
def get_tasks():
    status = request.args.get('status')
    due_date = request.args.get('due_date')
    search = request.args.get('search')
    limit = request.args.get('limit', type=int)
    offset = request.args.get('offset', type=int)

    query = Task.query

    if status:
        query = query.filter(Task.status.ilike(status))
    if due_date:
        query = query.filter(Task.due_date == due_date)
    if search:
        query = query.filter(Task.title.ilike(f"%{search}%"))
    if limit:
        query = query.limit(limit)
    if offset:
        query = query.offset(offset)

    tasks = query.all()
    return jsonify([{
        "id": t.id,
        "title": t.title,
        "description": t.description,
        "status": t.status,
        "due_date": t.due_date
    } for t in tasks])

# --- Add a task ---
@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    new_task = Task(
        title=data.get('title'),
        description=data.get('description'),
        status=data.get('status', 'pending'),
        due_date=data.get('due_date')
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({"message": "Task added successfully!"}), 201

# --- Update task ---
@app.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    task = Task.query.get_or_404(id)
    data = request.get_json()
    if 'status' in data:
        task.status = data['status']
    if 'title' in data:
        task.title = data['title']
    if 'description' in data:
        task.description = data['description']
    db.session.commit()
    return jsonify({"message": "Task updated successfully!"})

# --- Delete task ---
@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get_or_404(id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
