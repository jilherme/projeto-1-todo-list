import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { logo } from "./assets";
import { AddTask, EmptyTasks, TaskList } from "./components";

import "./global.css";
import styles from "./App.module.css";

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

function App() {
  const [newTask, setNewTask] = useState<TaskProps>({
    id: "",
    title: "",
    isComplete: false,
  });
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const tasksExists = tasks.length > 0;
  const numberOfTasks = tasks.length;
  /* const completedTasks = tasks.filter((task) => task.isComplete).length; */
  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isComplete) acc += 1;
    return acc;
  }, 0);
  const completedTasksText = () => {
    if (numberOfTasks === 0) return numberOfTasks;
    if (numberOfTasks > 0) return `${completedTasks} de ${numberOfTasks}`;
  };

  const uniqueId = uuidv4();

  function handleAddNewTask(e: FormEvent) {
    e.preventDefault();
    const taskToAdd = {
      id: uniqueId,
      title: newTask.title,
      isComplete: false,
    };
    setTasks([...tasks, taskToAdd]);
    setNewTask({
      id: "",
      title: "",
      isComplete: false,
    });
  }

  function handleChangeNewTask(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setNewTask({
      ...newTask,
      title: e.currentTarget.value,
    });
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  function handleTaskStatus(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) task.isComplete = !task.isComplete;
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
      </header>

      <main className={styles.main}>
        <AddTask
          newTask={newTask}
          onChange={handleChangeNewTask}
          onAddNewTask={handleAddNewTask}
        />

        <div className={styles.tasksContainer}>
          <header>
            <div>
              <span className={styles.createdTasks}>Tarefas Criadas</span>
              <span className={styles.tasksQuantity}>{completedTasks}</span>
            </div>
            <div>
              <span className={styles.completedTasks}>Concluídas</span>
              <span className={styles.tasksQuantity}>
                {completedTasksText()}
              </span>
            </div>
          </header>

          {tasksExists ? (
            <TaskList
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onToggleTaskStatus={handleTaskStatus}
            />
          ) : (
            <EmptyTasks />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
