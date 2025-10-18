import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API_URL = "http://127.0.0.1:5000/tasks";

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) {
      alert("Title cannot be empty");
      return;
    }
    try {
      const res = await axios.post(API_URL, {
        title,
        description,
        completed: false,
      });
      setTasks([...tasks, res.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task", error);
      alert("Error adding task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🏋️ Workout Task Manager</h1>

      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <b>{t.title}</b> — {t.description} ({t.completed ? "✅" : "❌"})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
