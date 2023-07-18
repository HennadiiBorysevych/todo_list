import React from "react";
import { useToDoStore } from "@/data/stores/useToDoStore";
import styles from "./index.module.scss";
import { InputPlus } from "../components/InputPlus";

const App: React.FC = () => {
  const [tasks, createTask, removeTask, updateTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.removeTask,
    state.updateTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To DO app</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.articleSection}></section>
    </article>
  );
};

export default App;
