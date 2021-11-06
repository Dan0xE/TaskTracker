import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task shadow-2xl bg-primary rounded-xl ${task.reminder ? 'reminder' : ' '}`} //changes border on onDoubleClick
            onDoubleClick={() =>
                onToggle(task.id)}>
            <h3>{task.text}
                <FaTimes
                style={{ color: 'black', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
