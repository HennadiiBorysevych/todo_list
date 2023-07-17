import React from "react";

import styles from './index.module.scss'

const App:React.FC = () => {
  return <article className={styles.article}>
    <h1 className={styles.articleTitle}>To scsacac app</h1>
    <section className={styles.articleSection}></section>
    <section className={styles.articleSection}></section>
  </article>;
};

export default App;
