import { useEffect, useState } from "react";
import useTaskViewModel from "@VM/TaskViewModel";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const { addTask, getAllTasks } = useTaskViewModel();
  const handleAddTask = () => {
    addTask(taskInput);
    setTaskInput("");
    setTasks(getAllTasks());
  };

  useEffect(() => {
    setTasks(getAllTasks());
  }, [getAllTasks]);

  return (
    <div className="main-container">
      <h1>Task Manager</h1>
      <div className="main text-input">
        <input
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="main task-wrapper">
        <h2>Tasks</h2>
        <hr />
        {tasks.length !== 0 && (
          <ul className="task-item">
            {tasks.map((task, index) => (
              <li className="text" key={index}>
                {task}
              </li>
            ))}
          </ul>
        )}
        <div className="list-not-found">
          {tasks.length === 0 && <p className="text">There is no task item</p>}
        </div>
      </div>
    </div>
  );
}

export default App;