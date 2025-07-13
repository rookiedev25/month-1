// App component:
import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // State for the current input task
  const [task, setTask] = useState("");
  // State for the list of tasks
  const [tasks, setTasks] = useState([]);

  // Adds a new task to the tasks list
  const addTask = () => {
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
    setTask(""); // Clear input after adding
  };

  // Deletes a single task by id
  const handleDelete = (e) => {
    let taskID = e.target.value;
    let taskIndex = tasks.findIndex((l) => l.id === taskID);
    let newTaskList = [...tasks];
    newTaskList.splice(taskIndex, 1); // Remove task at found index
    setTasks(newTaskList);
  };

  // Placeholder for edit functionality
  const handleEdit = () => {};

  // Handles input change for the task input field
  const handleInputChange = (element) => {
    setTask(element.target.value);
  };

  // Toggles the completion status of a task
  const handleCheckbox = (e) => {
    let taskID = e.target.name;
    let taskIndex = tasks.findIndex((l) => l.id === taskID);
    let newTaskList = [...tasks];
    newTaskList[taskIndex].isCompleted = !newTaskList[taskIndex].isCompleted;
    setTasks(newTaskList);
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      <div className="container mx-auto my-20 rounded-xl p-5 bg-orange-200 min-h-[80vh]">
        {/* Input section for adding new tasks */}
        <div className="flex gap-2 items-center justify-center">
          <h1 className="font-semibold">New Task here:</h1>
          <input
            onChange={handleInputChange}
            value={task}
            className="border-1 rounded-xl px-2 py-0.5 w-80"
            type="text"
            placeholder="buy onions.."
          />
          <button
            onClick={addTask}
            className="bg-orange-600 text-white px-4 py-1 rounded-xl cursor-pointer font-bold"
          >
            Add to List
          </button>
        </div>

        {/* Task list display section */}
        <div className="taskList mt-10 rounded-xl p-3 bg-orange-50 flex-col gap-4">
          <h1 className="font-bold border-b-1 mb-2 flex items-center justify-center py-1">
            Your Tasks
          </h1>
          <div className="displayTasks">
            {/* Show message if no tasks are present */}
            {tasks.length === 0 && (
              <div className="flex flex-col text-amber-900 opacity-40 font-light h-160 items-center justify-center align-content">
                🗑️
                <p>Task List Empty</p>
              </div>
            )}
          </div>
          {/* Render each task */}
          {tasks.map((t) => {
            return (
              <div key={t.id} className="taskList flex justify-between mt-2">
                <div className="list flex justify-between mt-1 gap-2">
                  {/* Checkbox to mark task as completed */}
                  <input
                    name={t.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    id=""
                    value={t.isCompleted}
                  />
                  {/* Task text, strikethrough if completed */}
                  <p className={t.isCompleted ? "line-through" : ""}>
                    {t.task}
                  </p>
                </div>

                {/* Edit and Delete buttons */}
                <div className="flex gap-2 cursor-pointer">
                  <button
                    onClick={handleEdit}
                    value={t.id}
                    className="bg-orange-900 opacity-50 disabled text-white px-4 py-1 rounded-xl cursor-not-allowed font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    value={t.id}
                    className="bg-orange-600 text-white px-4 py-1 rounded-xl cursor-pointer font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;

// Navbar component:
import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-orange-600 text-white py-3">
      <div className="logo">
        <span className="font-bold text-xl mx-8 my-2">TaskList</span>
      </div>
      <ul className="flex gap-8 mx-8 my-0.5">
        <li className="cursor-pointer hover:font-bold transition-all duration-100">
          <a href="https://github.com/rookiedev25">rookiedev25</a>
        </li>
      </ul>
    </nav>
  );
}

// export default NavBar