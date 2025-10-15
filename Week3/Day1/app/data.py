
tasks = [
    {"id": 1, "name": "Organsing October's Schedule", "completed": False},
    {"id": 2, "name": "Buy study materials", "completed": True}
]

def next_id():
    if not tasks:
        return 1
    return max(t["id"] for t in tasks) + 1
