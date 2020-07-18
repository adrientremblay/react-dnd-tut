import React, { Component } from "react";
import initialData from "./initial-data";
import Column from "./Column/Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = initialData;

  dragEndHandler = () => {
    // TODO
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.dragEndHandler}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default App;
