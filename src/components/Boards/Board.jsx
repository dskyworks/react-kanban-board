import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AddTask from "../buttons/AddTask";

const Board = ({ boardName, tasksList, setTasksList }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropDownRef = useRef(null);
  const board = tasksList.findIndex((e) => {
    let currentBoardIndex;
    if (boardName === e.boardName) {
      currentBoardIndex = e;
    }
    return currentBoardIndex;
  });

  const prevBoard = board - 1;
  const toggleDropDown = () => {
    tasksList[prevBoard].tasks.length > 0 && setDropDownOpen(!dropDownOpen);
  };

  let addTaskButton;
  boardName === "Backlog"
    ? (addTaskButton = (
        <AddTask tasksList={tasksList} setTasksList={setTasksList} />
      ))
    : (addTaskButton = (
        <button
          className="board__button board__button--add"
          disabled={!tasksList[prevBoard].tasks.length > 0}
          onClick={toggleDropDown}
          aria-controls="dropdown-list"
          aria-expanded={dropDownOpen && true}
          aria-label="open a list of tasks to move to the current board"
        >
          + Add card
        </button>
      ));

  const handleMoveTask = (idx) => {
    setTasksList(() => {
      const newTasksList = [...tasksList];
      const taskToMove = newTasksList[prevBoard].tasks.splice(idx, 1);
      newTasksList[board].tasks.push(taskToMove[0]);
      return newTasksList;
    });
  };

  let dropDownItems;
  if (board > 0) {
    dropDownItems = tasksList[prevBoard].tasks.map((e, idx) => (
      <li
        className="dropdown-item"
        key={e.id}
        tabIndex={0}
        onClick={() => {
          handleMoveTask(idx);
          setDropDownOpen(!dropDownOpen);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleMoveTask(idx);
            setDropDownOpen(!dropDownOpen);
          }
        }}
      >
        {e.name}
      </li>
    ));
  }

  const taskListItems = tasksList[board].tasks.map((e) => (
    <li key={e.id} className="board__item">
      <Link
        className="board__item-link"
        draggable="false"
        to={`/tasks/${e.id}`}
      >
        {e.name}
      </Link>
    </li>
  ));

  useEffect(() => {
    localStorage.setItem("tasks_list", JSON.stringify(tasksList));
  }, [tasksList]);

  useEffect(() => {
    if (dropDownOpen) {
      dropDownRef.current.focus();
    }
  }, [dropDownOpen]);

  return (
    <div className="board">
      <h2 className="board__heading">{boardName}</h2>
      {taskListItems.length > 0 && (
        <ul className="board__list">{taskListItems}</ul>
      )}
      {dropDownOpen && (
        <>
          <button
            ref={dropDownRef}
            className="dropdown__select"
            type="button"
            onClick={toggleDropDown}
            aria-label="close the list of tasks to move"
            aria-expanded={dropDownOpen && true}
            aria-controls="dropdown-list"
          ></button>
          <ul className="dropdown-list">{dropDownItems}</ul>
        </>
      )}
      {!dropDownOpen && addTaskButton}
    </div>
  );
};

export default Board;
