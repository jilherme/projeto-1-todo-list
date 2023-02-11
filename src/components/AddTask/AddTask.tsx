import { ChangeEvent, FormEvent, InvalidEvent } from "react";
import { plus } from "../../assets";
import styles from "./AddTask.module.css";

interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

type AddTaskProps = {
  newTask: TaskProps;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddNewTask: (e: FormEvent) => void;
};

export function AddTask({ newTask, onChange, onAddNewTask }: AddTaskProps) {
  function handleNewCommentInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <form className={styles.container} onSubmit={onAddNewTask}>
      <input
        value={newTask.title}
        onChange={onChange}
        name="add-task"
        type="text"
        placeholder="Adicione uma nova tarefa"
        onInvalid={handleNewCommentInvalid}
        required
      />
      <button type="submit">
        Criar
        <img src={plus} alt="" />
      </button>
    </form>
  );
}
