import React, { Component } from "react";
import initialData from "./initial-data";
import Column from "./Column/Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = initialData;

  dragStartHandler = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };

  dragUpdateHandler = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  };

  dragEndHandler = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
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
      <DragDropContext
        onDragStart={this.dragStartHandler}
        onDragUpdate={this.dragUpdateHandler}
        onDragEnd={this.dragEndHandler}
      >
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
