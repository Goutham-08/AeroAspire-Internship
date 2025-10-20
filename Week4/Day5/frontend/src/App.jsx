import React from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1> Task Dashboard</h1>
      <TaskList />
    </div>
  );
}

export default App;
