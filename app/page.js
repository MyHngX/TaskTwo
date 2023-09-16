'use client'

import styles from "./page.module.scss";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Featured />
      <Footer />
    </main>
  );
}
