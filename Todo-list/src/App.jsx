import "./App.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

function App() {
  const [event, setElement] = useState("");

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
          <input
            type="text"
            placeholder="new task"
            onChange={(event) => setElement(event.target.value)}
          />
          <button
            type="text"
            placeholder="new task"
            value={element}
            onChange={(event) => setElement(event.target.value)}
          />
        </div>
      </main>
    </>
  );
}

export default App;
