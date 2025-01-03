import React from "react";
import "./presentacion.css";
import Avatar from "../../assets/avatar.webp";
import { useTranslation } from "react-i18next";
import { Email, Instagram, Linkedin } from "../../components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Presentecion() {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "presentacion" });

    const changeLanguage = (idi) => {
        i18n.changeLanguage(idi);
    };

    const onChange = (value) => changeLanguage(value);

    return (
        <section className="section__content presentacion">
            <div className="container__nombre">
                <h1>Joan González.</h1>
                <h2>{t("puesto")}</h2>
                <div className="ilikeit">
                    <p>{t("Me gusta")}</p>
                    <div className="caja__texto">
                        <span>{t("mg.1")}</span>
                        <span>{t("mg.2")}</span>
                        <span>{t("mg.3")}</span>
                    </div>
                </div>
                <select onChange={(e) => onChange(e.target.value)} value={i18n.language}>
                    <option value="es">España</option>
                    <option value="en">Ingles</option>
                </select>
            </div>
            <div className="container__foto">
                <div className="div1">
                    <div className="foto">
                        <img src={Avatar} alt="" />
                    </div>
                    <div className="info__contact">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} color="var(--color-one)" />
                            <span>
                                <a href="mailto:joangonzalezalbert@gmail.com">joangonzalezalbert@gmail.com</a>
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faWhatsapp} color="var(--color-one)" />
                            <span>
                                <a href="tel:+34 684 411 728">684 411 728</a>
                            </span>
                        </div>
                        {/* <div className="redes__sociales">
                            <Instagram size={25} />
                            <Linkedin size={25} />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentecion;
