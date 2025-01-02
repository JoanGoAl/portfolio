import React from "react";
import "./header.css";

function Header({ sections, currentSection, setPage }) {
    return (
        <header className={"header" + (currentSection + 1)}>
            <ul>
                {sections.map((section, index) => {
                    return (
                        <li key={index}>
                            <button
                                onClick={() => setPage(index)}
                                className={currentSection === index ? "active" : ""}
                            ></button>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}

export default Header;
