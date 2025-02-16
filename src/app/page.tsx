import TypeWriter from "@/components/typewriter/Typewriter";
import styles from "./home.module.css"

export default function Home() {
  return (
    <section>
      <div className={styles.saludos_container}>
        <div className={styles.saludos}>
          <h1>HI THERE</h1>
          <div className={styles.destacar}>
            <TypeWriter strings={["Full Stack Developer", "Work as a team", "Learn new things"]} />
          </div>
        </div>
        <div>b</div>
      </div>
      <div style={{ width: "50px", height: "500px" }}></div>
    </section>
  );
}
