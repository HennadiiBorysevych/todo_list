import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import styles from "./index.module.scss";
import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";

const App: React.FC = () => {
  const [tasks, createTask, removeTask, updateTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.removeTask,
    state.updateTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do app</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length ? (
          <p className={styles.articleText}>There are no tasks</p>
        ) : (
          tasks.map((task) => {
            return (
              <InputTask
                key={task.id}
                id={task.id}
                title={task.title}
                onDone={removeTask}
                onEdited={updateTask}
                onRemoved={removeTask}
              />
            );
          })
        )}
      </section>
    </article>
  );
};

export default App;
