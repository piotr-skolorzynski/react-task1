import { useState } from 'react';
import TasksList from './TasksList';
import TasksListHeader from './TasksListHeader';

function App() {
  const [taskText, setTaskText] = useState('');
  const [taskStages, setTaskStages] = useState(0);
  const [tasks, setTasks] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setTasks(() => {
      const task = {
        id: new Date().getTime().toString(),
        text: taskText,
        plannedStages: taskStages,
        finishedStages: 0,
        isFinished: false
      }
      return [...tasks, task];
    });
    setTaskText('');
    setTaskStages(0);
  };

  const handleDelete = id => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const handleFinished = id => {
    setTasks(tasks.map(task => {
      if(task.id === id) {
        return {...task, isFinished: !task.isFinished, finishedStages: task.plannedStages}
      } else {
        return task;
      }
    }))
  };

  const handleIncrease = id => {
    setTasks(tasks.map(task => {
      if(task.finishedStages >= task.plannedStages) {
        return task;
      } else {
        return {...task, finishedStages: task.finishedStages + 1}
      }
    }))
  };

  return (
    <div className="app-container">
      <TasksListHeader />
      <TasksList tasks={tasks} handleDelete={handleDelete} handleFinished={handleFinished} handleIncrease={handleIncrease} />
      <form className="form" onSubmit={handleSubmit}>
        <input className="form-input-text" type="text" placeholder="Enter task name" value={taskText} onChange={e => setTaskText(e.target.value)} />
        <input className="form-input-number" type="number" placeholder="0" value={taskStages} onChange={e => setTaskStages(e.target.value)}/>
        <button className="form-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
