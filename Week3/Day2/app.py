from flask import Flask, jsonify, request

app = Flask(__name__)

tasks = [
    {
        "id": 1,
        "title": "Do Squats",
        "description": "Complete 3 sets of 15 reps",
        "completed": False
    },
    {
        "id": 2,
        "title": "Morning Jog",
        "description": "Run for 30 minutes around the park",
        "completed": True
    },
    {
        "id": 3,
        "title": "Lunges and Push-ups",
        "description": "3 sets of lunges per leg and 20 push-ups",
        "completed": False
    }
]

@app.route('/')
def home():
    return "🏋️ Welcome to the Workout Tracker API! Try /tasks to view your workout list."

@app.route('/tasks', methods=['GET'])
def get_tasks():
    completed_param = request.args.get('completed')
    if completed_param is not None:
        completed_bool = completed_param.lower() == 'true'
        filtered_tasks = [task for task in tasks if task['completed'] == completed_bool]
        return jsonify(filtered_tasks)
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    new_task = {
        "id": len(tasks) + 1,
        "title": data.get("title", ""),
        "description": data.get("description", ""),
        "completed": data.get("completed", False)
    }
    tasks.append(new_task)
    return jsonify(new_task), 201

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = next((t for t in tasks if t['id'] == task_id), None)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    data = request.get_json()
    task['title'] = data.get('title', task['title'])
    task['description'] = data.get('description', task['description'])
    task['completed'] = data.get('completed', task['completed'])
    return jsonify(task)

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [t for t in tasks if t['id'] != task_id]
    return jsonify({"message": f"Workout task {task_id} deleted."})

if __name__ == '__main__':
    app.run(debug=True)
