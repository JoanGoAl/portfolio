import TypeWriter from "@/components/typewriter/Typewriter";
import styles from "./home.module.css"

export default function Home() {
  return (
    <section>
      <div className={styles.saludos_container}>
        <div className={styles.saludos}>
          <h1>HI THERE</h1>
          <TypeWriter strings={["Hola mundo!!!", "Joan González Albert"]} />
        </div>
        <div>b</div>
      </div>
    </section>
  );
}
