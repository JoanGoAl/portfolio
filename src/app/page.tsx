import TypeWriter from "@/components/typewriter/Typewriter";
import styles from "./home.module.css"

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Home() {
  return (
    <section>
      <div className={styles.saludos_container}>
        <div className={styles.saludos}>
          <h1>HI THERE</h1>
          <h2>I am Joan González</h2>
          <div className={styles.destacar}>
            <TypeWriter strings={["Full Stack Developer", "Work as a team", "Learn new things"]} />
          </div>
        </div>
        <div className={styles.container__photo__compare}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={"/avatar.webp"} srcSet={"/avatar.webp"} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={"/myself.JPG"} srcSet={"/myself.JPG"} alt="Image two" />}
          />
        </div>
      </div>
      <div style={{ width: "50px", height: "500px" }}></div>
    </section>
  );
}
