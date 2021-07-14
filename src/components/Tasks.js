import Task from './Task'


const Tasks = ({ tasks, onDelete, onTogggle }) => {

    //Credit: https://www.npmjs.com/package/query-string
    const queryString = require('query-string');
    console.log("window.location.search", window.location.search);
    const parsed = queryString.parse(window.location.search);
    console.log(parsed.id);

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onTogggle={onTogggle}></Task>
          ))}  
        </>
    )
}

export default Tasks
