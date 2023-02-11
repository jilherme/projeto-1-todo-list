import { Task } from "../Task/Task";
import { TaskProps } from "../../App";

import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: TaskProps[];
  onDeleteTask: (id: string) => void;
  onToggleTaskStatus: (id: string) => void;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onToggleTaskStatus,
}: TaskListProps) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onDeleteTask={onDeleteTask}
          onToggleTaskStatus={onToggleTaskStatus}
        />
      ))}
    </ul>
  );
}
