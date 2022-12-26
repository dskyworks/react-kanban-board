import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./EditTask.css";

const EditTask = ({ tasksList, setTasksList }) => {
  const { id } = useParams();

  let currentTask;
  let currentBoardIndex;
  let currentTaskIndex;
  for (const [boardIndex, board] of tasksList.entries()) {
    for (const [taskIndex, task] of board.tasks.entries()) {
      if (task.id === id) {
        currentTask = task;
        currentBoardIndex = boardIndex;
        currentTaskIndex = taskIndex;
      }
    }
  }

  const [inputTaskNameValue, setInputTaskNameValue] = useState(
    currentTask.name
  );
  const [inputTaskDescriptionValue, setInputTaskDescriptionValue] = useState(
    currentTask.description
  );

  const handleInputTaskNameValue = (e) => {
    setInputTaskNameValue(e.target.value);
  };
  const handleInputTaskDescriptionValue = (e) => {
    setInputTaskDescriptionValue(e.target.value);
  };

  const editTaskName = () => {
    if (inputTaskNameValue && inputTaskNameValue !== currentTask.name) {
      const newTasksList = [...tasksList];
      newTasksList[currentBoardIndex].tasks[currentTaskIndex].name =
        inputTaskNameValue;
      setTasksList(newTasksList);
      setInputTaskNameValue(inputTaskNameValue.trim());
    }
  };
  const editTaskDescription = () => {
    if (
      inputTaskDescriptionValue &&
      inputTaskDescriptionValue !== currentTask.description
    ) {
      const newTasksList = [...tasksList];
      newTasksList[currentBoardIndex].tasks[currentTaskIndex].description =
        inputTaskDescriptionValue;
      setTasksList(newTasksList);
      setInputTaskDescriptionValue(inputTaskDescriptionValue.trim());
    }
  };

  return (
    <div className="edit-task">
      <div className="edit-task__task-name">
        <input
          className="task__name"
          type="text"
          value={inputTaskNameValue}
          placeholder="Task name"
          onChange={handleInputTaskNameValue}
          onBlur={editTaskName}
        />
      </div>
      <div className="edit-task__task-description">
        <textarea
          className="task__description"
          type="text"
          autoFocus={true}
          value={inputTaskDescriptionValue}
          placeholder="This task has no description"
          onChange={handleInputTaskDescriptionValue}
          onBlur={editTaskDescription}
        />
      </div>
      <Link
        className="edit-task__close"
        to="/"
        aria-roledescription="Close task edit"
      ></Link>
    </div>
  );
};

export default EditTask;
