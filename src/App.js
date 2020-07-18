import React, { Component } from "react";
import initialData from "./initial-data";

class App extends Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

      return column.title;
    });
  }
}

export default App;
