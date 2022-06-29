import Task from "./Task";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
}: {
  tasks: any;
  onDelete: any;
  onToggle: any;
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
