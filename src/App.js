

function App() {
  return (
    <div className="app-container">
      <div className="tasks-header">
        <span>Task name</span>
        <span>Status (done / planned)</span>
        <span>Controls</span>
      </div>
      <ul className="tasks-container">
        <li className="task">
          <span className="task-name">Task 1</span>
          <span className="task-status">1/4</span>
          <div className="btn-container">
            <button>done</button>
            <button>increase task count</button>
            <button>delete task</button>
          </div>
        </li>
        <li className="task">
          <span className="task-name">Task 1</span>
          <span className="task-status">1/4</span>
          <div className="btn-container">
            <button>done</button>
            <button>increase task count</button>
            <button>delete task</button>
          </div>
        </li>
      </ul>
      <form className="form">
        <input className="form-input-text" type="text" placeholder="Enter task name" />
        <input className="form-input-number" type="number" placeholder="0"/>
        <button className="form-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
