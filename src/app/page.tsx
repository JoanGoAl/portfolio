// import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.page}>
        <main className={styles.main}>
          main
        </main>
      </div>

      <footer className={styles.footer}>
        Joan González Albert
      </footer>
    </div>
  );
}
