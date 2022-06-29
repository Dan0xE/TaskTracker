import { FaTimes } from "react-icons/fa";
import { task } from "../@types";

const Task = ({
  task,
  onDelete,
  onToggle,
}: {
  task: task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  return (
    <div
      className={`task shadow-2xl hover:shadow-none hover:bg-purple-700 hover:translate-x-1 duration-100 ease-linear bg-primary rounded-xl ${
        task.reminder ? "reminder" : " "
      }`}
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
