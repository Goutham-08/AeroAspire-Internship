import sqlite3

# Connect to database (creates tasks.db if it doesn't exist)
conn = sqlite3.connect("tasks.db")
cursor = conn.cursor()

# Execute schema.sql file
with open("schema.sql", "r") as f:
    cursor.executescript(f.read())

print("✅ Database and table created successfully!")

# Insert 3 sample tasks
sample_tasks = [
    ("Morning Workout", "Do 50 squats and 30 lunges", "pending", "2025-10-20"),
    ("Evening Run", "Run 5 kilometers in the park", "completed", "2025-10-19"),
    ("Yoga Session", "Attend online yoga class", "pending", "2025-10-21")
]

cursor.executemany(
    "INSERT INTO tasks (title, description, status, due_date) VALUES (?, ?, ?, ?)",
    sample_tasks
)

conn.commit()
print("✅ 3 sample tasks added successfully!")

# Display all tasks for confirmation
cursor.execute("SELECT * FROM tasks")
rows = cursor.fetchall()

print("\n📋 Tasks in database:")
for row in rows:
    print(row)

conn.close()
