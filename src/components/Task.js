import { FaTimes } from 'react-icons/fa'


const Task = ({ task, onDelete, onTogggle }) => {
    const reminderClassName = task.reminder ? 'task reminder' : 'task'

    return (
        <div className={reminderClassName} onDoubleClick={() => onTogggle(task.id)}>
            <h3 key={task.id}>
                {task.text}...
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{ task.day }</p>
        </div>
    )
}

export default Task
