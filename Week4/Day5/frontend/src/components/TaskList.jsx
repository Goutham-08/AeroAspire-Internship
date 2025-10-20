import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/tasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("⚠️ Unable to fetch tasks. Please check backend connection.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (tasks.length === 0 || tasks.message === "No tasks available")
    return <p>No tasks found in the database.</p>;

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            margin: "10px auto",
            width: "60%",
            textAlign: "left",
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: <b>{task.status}</b></p>
          <p>Due: {task.due_date}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
