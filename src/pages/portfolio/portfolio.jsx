import { useEffect, useState } from "react";
import Presentecion from "../sections/presentacion";
import "./portfolio.css";
import Header from "../../components/menu/menu";

const sections = [
    {
        id: "presentacion",
        children: <Presentecion />,
        name: "Presenteción",
    },
    {
        id: "section2",
        children: <div>Seccion 2</div>,
        name: "Seccion 2",
    },
    {
        id: "section3",
        children: <div>Seccion 3</div>,
        name: "Seccion 3",
    },
    {
        id: "section4",
        children: <div>Seccion 4</div>,
        name: "Seccion 4",
    },
    {
        id: "section5",
        children: <div>Seccion 5</div>,
        name: "Seccion 5",
    },
];

function Portfolio() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            if (isScrolling) return;

            if (event.deltaY > 0 && currentSection < sections.length - 1) {
                setCurrentSection((prev) => prev + 1);
                setIsScrolling(true);
            } else if (event.deltaY < 0 && currentSection > 0) {
                setCurrentSection((prev) => prev - 1);
                setIsScrolling(true);
            }

            // Desbloquea el scroll después de un pequeño retraso
            setTimeout(() => setIsScrolling(false), 650);
        };

        window.addEventListener("wheel", handleScroll);

        return () => window.removeEventListener("wheel", handleScroll);
    }, [currentSection, isScrolling, sections]);

    useEffect(() => {
        const section = document.getElementById(sections[currentSection].id);
        if (section) {
            // document.title = sections[currentSection].name;
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentSection]);

    const setPage = (index) => {
        setCurrentSection(index);
    };

    return (
        <div className="main__portfolio">
            <Header sections={sections} currentSection={currentSection} setPage={setPage} />
            <div className="container__portfolio">
                {sections.map((section, index) => (
                    <div key={index} id={section.id} className="section">
                        {section.children}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
