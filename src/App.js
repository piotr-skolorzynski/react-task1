import { useState, useEffect } from 'react';

function App() {

  const generateId = (min=0, max=10000) => {
    return Math.floor(Math.random() * ((max - min + 1) + min));
  };
  const [taskText, setTaskText] = useState('');
  const [taskStages, setTaskStages] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleSubmit = e => {
    e.preventDefault();
    setTasks(() => {
      const task = {
        id: generateId(),
        text: taskText,
        plannedStages: taskStages,
        finishedStages: 0
      }
      return [...tasks, task];
    });
    setTaskText('');
    setTaskStages(0);
  };

  return (
    <div className="app-container">
      <div className="tasks-header">
        <span>Task name</span>
        <span>Status (done / planned)</span>
        <span>Controls</span>
      </div>
      <ul className="tasks-container">
        {tasks &&
            tasks.map(task => {
              const {id, text, plannedStages, finishedStages} = task;
              return (
                <li key={id} className="task">
                  <span className="task-name">{text}</span>
                  <span className="task-status">{finishedStages} / {plannedStages}</span>
                  <div className="btn-container">
                    <button>done</button>
                    <button>increase task count</button>
                    <button>delete task</button>
                  </div>
                </li>
              )
            })        
        }
      </ul>
      <form className="form" onSubmit={handleSubmit}>
        <input className="form-input-text" type="text" placeholder="Enter task name" value={taskText} onChange={e => setTaskText(e.target.value)} />
        <input className="form-input-number" type="number" placeholder="0" value={taskStages} onChange={e => setTaskStages(e.target.value)}/>
        <button className="form-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
