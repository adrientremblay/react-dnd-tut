const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take our garbage" },
    "task-2": { id: "task-2", content: "Watch TV" },
    "task-3": { id: "task-3", content: "Make a bomb" },
    "task-4": { id: "task-4", content: "Smoke bath salts" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default initialData;
