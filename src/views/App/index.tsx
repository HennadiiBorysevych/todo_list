import React from "react";

import styles from "./index.module.scss";
console.log("🚀 : styles", styles);

const App: React.FC = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To DO app</h1>
      <section className={styles.articleSection}></section>
      <section className={styles.articleSection}></section>
    </article>
  );
};

export default App;
