'use client'

import styles from "./page.module.scss";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Featured />
    </main>
  );
}
