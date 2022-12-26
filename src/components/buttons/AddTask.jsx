import { useState } from "react";
import "./AddTask.css";
import { v4 as uuidv4 } from "uuid";
import AddCardButton from "../buttons/AddCardButton";

const AddTask = ({ tasksList, setTasksList }) => {
  const [inputValue, setInputValue] = useState("");
  const [addingTask, setAddingTask] = useState(false);

  const handleInputUpdate = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        name: inputValue,
        description: "",
      };
      setTasksList(
        tasksList.map((e) => {
          if (e.boardName === "Backlog") {
            e.tasks.push(newTask);
          }
          return e;
        })
      );
      setInputValue("");
      setAddingTask(false);
    }
  };

  const handleCloseAddingTask = () => {
    setInputValue("");
    setAddingTask(false);
  }

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleAddTask(e);
    }
  };

  return (
    <>
      {!addingTask ? (
        <AddCardButton setAddingTask={setAddingTask} />
      ) : (
        <div className="board__add-task">
          <div className="board__input-container">
            <input
              className="board__input"
              value={inputValue}
              onChange={handleInputUpdate}
              autoFocus={true}
              required={true}
              onKeyDown={handleKeyDown}
            />
            <button
              className="board__input-close"
              aria-label="close adding card"
              onClick={handleCloseAddingTask}
            ></button>
          </div>
          <button
            className={"board__button board__button--submit"}
            disabled={!inputValue}
            onClick={handleAddTask}
            type="submit"
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default AddTask;
