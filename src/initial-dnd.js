const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take our garbage" },
    "task-2": { id: "task-2", content: "Watch TV" },
    "task-3": { id: "task-3", content: "r garbage" },
    "task-4": { id: "task-4", content: "e our garbage" },
    "task-5": { id: "task-5", content: "Take o" },
    "task-6": { id: "task-6", content: "Take orbage" },
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
