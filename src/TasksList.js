const TasksList = ({tasks, handleDelete, handleFinished, handleIncrease}) => {
    
    return (
        <ul className="tasks-container">
            {tasks &&
                tasks.map(task => {
                const {id, text, plannedStages, finishedStages, isFinished} = task;
                return (
                    <li key={id} className="task">
                        <span className="task-name">{text}</span>
                        <span className="task-status">{finishedStages} / {plannedStages}</span>
                        <div className="btn-container">
                            { isFinished ? (
                                <>
                                    <span>Finished</span>
                                    <button type="button" onClick={() => handleDelete(id)}>delete task</button>
                                </> 
                            ) : (
                                <>
                                    <button type="button" onClick={() => handleFinished(id)}>done</button>
                                    <button type="button" onClick={() => handleIncrease(id)}>increase task count</button>
                                    <button type="button" onClick={() => handleDelete(id)}>delete task</button>
                                </>
                            )}
                        </div>
                    </li>
                )
                })        
            }
        </ul>
    );
}
 
export default TasksList;