import React from "react";
import "./presentacion.css";
import Avatar from "../../assets/avatar.webp";
import { useTranslation } from "react-i18next";

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
                    <p>Y me gusta</p>
                    <div className="caja__texto">
                        <span>Trabajar en equipo</span>
                        <span>Aprender cosas nuevas</span>
                        <span>Resolver Problemas</span>
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
                            <span>
                                <a href="mailto:joangonzalezalbert@gmail.com">joangonzalezalbert@gmail.com</a>
                            </span>
                        </div>
                        <div>
                            <span>
                                <a href="mailto:joangonzalezalbert@gmail.com">joangonzalezalbert@gmail.com</a>
                            </span>
                        </div>
                        <div>
                            <span>
                                <a href="mailto:joangonzalezalbert@gmail.com">joangonzalezalbert@gmail.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentecion;
