import React, { Component } from "react";
import initialData from "./initial-data";
import Column from "./Column/Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = initialData;

  dragEndHandler = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    const column = this.state.columns[source.droppableId];
    const newTasksIds = Array.from(column.taskIds); // new task id array
    newTasksIds.splice(source.index, 1); // remove from source index
    newTasksIds.splice(destination.index, 0, draggableId); // add to destination index

    const newColumn = {
      ...column,
      taskIds: newTasksIds,
    };

    this.setState({
      columns: {
        [newColumn.id]: newColumn,
      },
    });
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
