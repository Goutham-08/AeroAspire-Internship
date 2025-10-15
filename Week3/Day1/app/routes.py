from flask import Blueprint, jsonify, request, abort

bp = Blueprint("routes", __name__)

from .data import tasks, next_id

@bp.route("/", methods=["GET"])
def hello():
    return "Hello,I and Flask both are working.", 200

@bp.route("/tasks", methods=["GET"])
def get_tasks():
    completed_q = request.args.get("completed")
    if completed_q is not None:
        if completed_q.lower() in ("true", "1"):
            filtered = [t for t in tasks if t.get("completed")]
        else:
            filtered = [t for t in tasks if not t.get("completed")]
        return jsonify(filtered), 200

    return jsonify(tasks), 200

@bp.route("/tasks", methods=["POST"])
def create_task():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    name = data.get("name")
    if not name or not isinstance(name, str) or not name.strip():
        return jsonify({"error": "Field 'name' is required"}), 400

    new_task = {
        "id": next_id(),
        "name": name.strip(),
        "completed": bool(data.get("completed", False))
    }
    tasks.append(new_task)
    return jsonify(new_task), 201
