from flask import Flask, jsonify, request
from flasgger import Swagger # type: ignore

app = Flask(__name__)
swagger = Swagger(app, template_file='swagger.yaml')

tasks = [
    {"id": 1, "title": "Morning Run", "description": "5 km jog", "status": "completed", "due_date": "2025-10-19"},
    {"id": 2, "title": "Push-Ups", "description": "50 reps", "status": "pending", "due_date": "2025-10-20"}
]

@app.route('/api/v1/tasks', methods=['GET'])
def get_tasks():
    """Get all tasks
    ---
    responses:
      200:
        description: List of all tasks
    """
    return jsonify(tasks), 200


@app.route('/api/v1/tasks', methods=['POST'])
def create_task():
    """Create a new task
    ---
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              title:
                type: string
              description:
                type: string
              status:
                type: string
              due_date:
                type: string
    responses:
      201:
        description: Task created successfully
    """
    new_task = request.get_json()
    new_task["id"] = len(tasks) + 1
    tasks.append(new_task)
    return jsonify({"message": "Task created successfully", "task": new_task}), 201


@app.route('/api/v1/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    """Update an existing task
    ---
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: integer
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              title:
                type: string
              description:
                type: string
              status:
                type: string
              due_date:
                type: string
    responses:
      200:
        description: Task updated successfully
    """
    for task in tasks:
        if task["id"] == id:
            data = request.get_json()
            task.update(data)
            return jsonify({"message": "Task updated successfully", "task": task}), 200
    return jsonify({"error": "Task not found"}), 404


@app.route('/api/v1/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    """Delete a task
    ---
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: integer
    responses:
      200:
        description: Task deleted successfully
    """
    global tasks
    tasks = [task for task in tasks if task["id"] != id]
    return jsonify({"message": f"Task {id} deleted successfully"}), 200


if __name__ == '__main__':
    app.run(debug=True)
