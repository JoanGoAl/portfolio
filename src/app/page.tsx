import TypeWriter from "@/components/typewriter/Typewriter";
import styles from "./home.module.css"

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LinkType } from "@/types";

const externalLinks: LinkType[] = [
  {
    href: "https://www.linkedin.com/in/joan-gonz%C3%A1lez-albert-8b6892263/",
    icon: <FaLinkedin />
  },
  {
    href: "https://wa.me/message/7BE43ZG3TFAVO1",
    icon: <FaWhatsapp />
  },
  {
    href: "https://www.instagram.com/joan_gonzalez4?igsh=MWMwMDRra2FubTRjeQ%3D%3D&utm_source=qr",
    icon: <FaInstagram />
  },
  {
    href: "https://github.com/JoanGoAl",
    icon: <FaGithub />
  },
  {
    href: "https://drive.google.com/drive/folders/1WHAd1M_udQUyXaPENOGhXwSbxsj2AuVi?usp=drive_link",
    icon: <FaGoogleDrive />
  },
  {
    href: "https://drive.google.com/drive/folders/1F_wnElwAmUNlD_LS7CMJ_nhlatKs4iA_?usp=drive_link",
    icon: <FaGoogleDrive />
  },
  {
    href: "mailto:joangonzalezalbert@gmail.com",
    icon: <MdOutlineAlternateEmail />
  }
];

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.saludos_container}>
          <div className={styles.saludos}>
            <h1>Hi there</h1>
            <h2>I am Joan González</h2>
            <div className={styles.destacar}>
              <TypeWriter strings={["Full Stack Developer", "Work as a team", "Learn new things"]} />
            </div>
            <div className={styles.social_media_container}>
              {externalLinks.map(({ href, icon }, index) => {
                return (
                  <Link target="_blank" key={`links-${index}`} href={href}>
                    {icon}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className={styles.container__photo__compare}>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={"/avatar.webp"} srcSet={"/avatar.webp"} alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={"/myself.JPG"} srcSet={"/myself.JPG"} alt="Image two" />}
            />
          </div>
        </div>
      </section>
      <section>
        <h1>About me</h1>
        <div>

        </div>
      </section>
      <section>
        <h1>Tecnologies</h1>

      </section>
    </>
  );
}
