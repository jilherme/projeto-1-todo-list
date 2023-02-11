import { clipboard } from "../../assets";

import styles from "./EmptyTasks.module.css";

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}

export default EmptyTasks;
