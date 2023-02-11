import * as Checkbox from "@radix-ui/react-checkbox";

import { check, trash } from "../../assets";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
  onDeleteTask: (id: string) => void;
  onToggleTaskStatus: (id: string) => void;
}

export function Task({
  id,
  title,
  isComplete,
  onDeleteTask,
  onToggleTaskStatus,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleToggleTaskStatus() {
    onToggleTaskStatus(id);
  }

  return (
    <li className={styles.listItem}>
      <div>
        <Checkbox.Root
          id={id}
          checked={isComplete}
          onCheckedChange={handleToggleTaskStatus}
          className={styles.CheckboxRoot}
        >
          <Checkbox.Indicator className={styles.CheckboxIndicator}>
            <img src={check} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>

      <label
        htmlFor={id}
        className={isComplete ? styles.taskTitleComplete : undefined}
      >
        {title}
      </label>

      <button onClick={handleDeleteTask} className={styles.deleteButton}>
        <img src={trash} alt="ícone de lixo" />
      </button>
    </li>
  );
}
