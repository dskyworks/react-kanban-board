import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Boards from "./components/Boards/Boards";
import Footer from "./components/Footer/Footer";
import EditTask from "./components/EditTask/EditTask";

const App = () => {
  const [tasksList, setTasksList] = useState(
    JSON.parse(localStorage.getItem("tasks_list")) || [
      {
        boardName: "Backlog",
        tasks: [],
      },
      {
        boardName: "Ready",
        tasks: [],
      },
      {
        boardName: "In Progress",
        tasks: [],
      },
      {
        boardName: "Finished",
        tasks: [],
      },
    ]
  );

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Boards tasksList={tasksList} setTasksList={setTasksList} />
            }
          >
            <Route
              path="tasks/:id"
              element={
                <EditTask tasksList={tasksList} setTasksList={setTasksList} />
              }
            />
          </Route>
        </Routes>
      </main>
      <Footer tasksList={tasksList} />
    </>
  );
};
export default App;
