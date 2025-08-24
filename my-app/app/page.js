import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
      <p>Your content goes here...</p>
    </div>
  );
}
