import Task from "./Task";
import { task } from "../@types";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
}: {
  tasks: task;
  onDelete: () => void;
  onToggle: () => void;
}) => {
  return (
    <>
      {tasks.map((task: any, index: number) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
