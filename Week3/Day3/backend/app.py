from flask import Flask, jsonify, request
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)  
tasks = [
    {"id": 1, "title": "Push-ups", "description": "3 sets of 15 reps", "completed": False},
    {"id": 2, "title": "Squats", "description": "4 sets of 20 reps", "completed": True},
]


@app.route('/tasks', methods=['GET'])
def get_tasks():
    completed_filter = request.args.get('completed')
    if completed_filter is not None:
        completed_value = completed_filter.lower() == 'true'
        filtered_tasks = [t for t in tasks if t['completed'] == completed_value]
        return jsonify(filtered_tasks)
    return jsonify(tasks)


@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    
    if not data or 'title' not in data or not data['title'].strip():
        return jsonify({"error": "Invalid input — title is required"}), 400

    new_task = {
        "id": len(tasks) + 1,
        "title": data['title'],
        "description": data.get('description', ''),
        "completed": data.get('completed', False)
    }
    tasks.append(new_task)
    return jsonify(new_task), 201

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    data = request.get_json()
    task = next((t for t in tasks if t["id"] == task_id), None)
    
    if not task:
        return jsonify({"error": "Task not found"}), 404

    if not data or 'title' not in data or not data['title'].strip():
        return jsonify({"error": "Invalid input — title is required"}), 400

    task.update({
        "title": data['title'],
        "description": data.get('description', task["description"]),
        "completed": data.get('completed', task["completed"])
    })
    return jsonify(task)


@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [t for t in tasks if t["id"] != task_id]
    return jsonify({"message": "Task deleted"})


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(400)
def bad_request(error):
    return jsonify({"error": "Bad request"}), 400


@app.route('/')
def home():
    return jsonify({"message": "Workout Task API is running ✅"}), 200

if __name__ == '__main__':
    app.run(debug=True)
