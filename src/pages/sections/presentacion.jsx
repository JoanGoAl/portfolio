import React from "react";
import "./sections.css";
import Avatar from "../../assets/avatar.webp";

function Presentecion() {
    return (
        <section className="section__content presentacion">
            <div className="container__nombre">
                <h1>Joan González.</h1>
                <h2>Desarrollador Web Full Stack</h2>
                <p>Hola!</p>
            </div>
            <div className="container__foto">
                <div className="foto">
                    <img src={Avatar} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Presentecion;
