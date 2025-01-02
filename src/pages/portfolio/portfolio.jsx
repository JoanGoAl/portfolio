import { useEffect, useState } from "react";
import Section1 from "../sections/section1";
import "./portfolio.css";
import Header from "../../components/header/header";

const sections = [
    {
        id: "section1",
        children: <Section1 index={1} />,
        name: "Seccion 1",
    },
    {
        id: "section2",
        children: <Section1 index={2} />,
        name: "Seccion 2",
    },
    {
        id: "section3",
        children: <Section1 index={3} />,
        name: "Seccion 3",
    },
    {
        id: "section4",
        children: <Section1 index={4} />,
        name: "Seccion 4",
    },
    {
        id: "section5",
        children: <Section1 index={5} />,
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
            setTimeout(() => setIsScrolling(false), 800);
        };

        window.addEventListener("wheel", handleScroll);

        return () => window.removeEventListener("wheel", handleScroll);
    }, [currentSection, isScrolling, sections]);

    useEffect(() => {
        const section = document.getElementById(sections[currentSection].id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentSection]);

    const setPage = (index) => {
        setCurrentSection(index);
    };

    return (
        <div className="container__portfolio">
            <Header sections={sections} currentSection={currentSection} setPage={setPage} />
            {sections.map((section, index) => (
                <div key={index} id={section.id} className="section">
                    {section.children}
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
