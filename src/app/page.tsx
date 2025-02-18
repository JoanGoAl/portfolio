import TypeWriter from "@/components/typewriter/Typewriter";
import styles from "./home.module.css"

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <div className={styles.saludos_container}>
        <div className={styles.saludos}>
          <h1>Hi there</h1>
          <h2>I am Joan González</h2>
          <div className={styles.destacar}>
            <TypeWriter strings={["Full Stack Developer", "Work as a team", "Learn new things"]} />
          </div>
          <div className={styles.social_media_container}>
            <Link target="_blank" href={"https://www.linkedin.com/in/joan-gonz%C3%A1lez-albert-8b6892263/"}>
              <FaLinkedin />
            </Link>
            <Link target="_blank" href={"https://wa.me/message/7BE43ZG3TFAVO1"}>
              <FaWhatsapp />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/joan_gonzalez4?igsh=MWMwMDRra2FubTRjeQ%3D%3D&utm_source=qr"}>
              <FaInstagram />
            </Link>
            <Link target="_blank" href={"https://github.com/JoanGoAl"}>
              <FaGithub />
            </Link>
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
