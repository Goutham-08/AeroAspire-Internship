# test_db.py
import sqlite3

DB_FILE = "tasks.db"

def show_tasks():
    conn = sqlite3.connect(DB_FILE)
    cur = conn.cursor()
    cur.execute("SELECT id, title, description, status, due_date FROM tasks ORDER BY id")
    rows = cur.fetchall()
    conn.close()
    if not rows:
        print("No tasks found.")
        return
    print("Tasks in database:")
    for r in rows:
        print(r)

if __name__ == "__main__":
    show_tasks()
