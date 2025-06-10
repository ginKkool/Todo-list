import "./App.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [element, setElement] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTab = [...tasks];
    newTab.push({
      title: element,
      isDone: false,
    });
    setTasks(newTab);
    setElement("");
  };
  const handleCheck = (index) => {
    const newTab = [...tasks];
    newTab[index].isDone = !newTab[index].isDone;
    setTasks(newTab);
  };

  const handleDelete = (index) => {
    const newTab = [...tasks];
    newTab.splice(index, 1);
    setTasks(newTab);
  };

  return (
    <>
      <header>
        <p className="menu-icon">
          <TfiMenuAlt />
        </p>
        <h1>Todo List</h1>
      </header>
      <main>
        <div className="inputs">
          {tasks.map((task, index) => {
            return (
              <div className="tasks">
                <input
                  checked={task.isDone}
                  type="checkbox"
                  onChange={() => {
                    handleCheck(index);
                  }}
                />
                <span className={task.isDone ? "done-task" : null}>
                  {task.title}
                </span>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
          <form onSubmit={handleSubmit}>
            <input
              value={element}
              type="text"
              placeholder="new task"
              onChange={(event) => {
                setElement(event.target.value);
              }}
            />
            <button type="submit">add task</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
