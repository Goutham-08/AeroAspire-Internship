import React from "react";

function TaskCard({ title, description, status, color }) {
  return (
    <div
      style={{
        backgroundColor: color || "#f0f0f0",
        minWidth: "180px",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div>
        <h2 style={{ marginBottom: "10px" }}>{title}</h2>
        <p style={{ marginBottom: "10px" }}>{description}</p>
        <span
          style={{
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: "8px",
            backgroundColor:
              status === "Done"
                ? "#023e04ff"
                : status === "In Progress"
                ? "#002251ff"
                : "#402525ff",
            color: "white",
            fontSize: "14px",
          }}
        >
          {status}
        </span>
      </div>
      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <button
          style={{
            flex: 1,
            padding: "8px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#089908ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
        <button
          style={{
            flex: 1,
            padding: "8px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#da180aff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
