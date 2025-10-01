import React from "react";
import TaskCard from "./components/TaskCard";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Learn React",
      description: "Go through basics of React components",
      status: "Pending",
    },
    {
      id: 2,
      title: "Build TaskCard",
      description: "Create a TaskCard component and render tasks",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Push to GitHub",
      description: "Commit Week 2 tasks and push to repo",
      status: "Done",
    },
  ];

  const colors = ["#9b8487ff", "#6495b4ff", "#73b16fff"];

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>📋 My Task Board</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
