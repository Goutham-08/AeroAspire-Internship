from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "API is running"})

@app.route("/api", methods=["GET"])
def api_status():
    return jsonify({"message": "API is running"}), 200


def get_db_connection():
    conn = sqlite3.connect("instance/database.db")
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    try:
        conn = get_db_connection()
        tasks = conn.execute("SELECT * FROM tasks").fetchall()
        conn.close()

        if not tasks:
            return jsonify({"message": "No tasks found", "data": []}), 200
        return jsonify([dict(row) for row in tasks]), 200

    except sqlite3.OperationalError as e:
        return jsonify({"error": "Database not found or table missing"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)