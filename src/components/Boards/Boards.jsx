import "./Boards.css";
import Board from "./Board";
import { Outlet } from "react-router-dom";

const Boards = ({ tasksList, setTasksList }) => {
  return (
    <div className="boards">
      <Board
        boardName={"Backlog"}
        tasksList={tasksList}
        setTasksList={setTasksList}
      />
      <Board
        boardName={"Ready"}
        tasksList={tasksList}
        setTasksList={setTasksList}
      />
      <Board
        boardName={"In Progress"}
        tasksList={tasksList}
        setTasksList={setTasksList}
      />
      <Board
        boardName={"Finished"}
        tasksList={tasksList}
        setTasksList={setTasksList}
      />
      <Outlet />
    </div>
  );
};

export default Boards;
