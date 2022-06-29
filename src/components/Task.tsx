import { FaTimes } from "react-icons/fa";

const Task = ({
  task,
  onDelete,
  onToggle,
}: {
  task: any;
  onDelete: any;
  onToggle: any;
}) => {
  return (
    <div
      className={`task shadow-2xl hover:shadow-none hover:bg-purple-700 hover:translate-x-1 duration-100 ease-linear bg-primary rounded-xl ${
        task.reminder ? "reminder" : " "
      }`} //changes border on onDoubleClick
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>
        {task.day} | {task.time}
      </p>
    </div>
  );
};

export default Task;
