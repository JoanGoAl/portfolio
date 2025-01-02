import React from "react";
import "./header.css";

function Menu({ sections, currentSection, setPage }) {
    return (
        <div className="header">
            <ul>
                {sections.map((_, index) => {
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
        </div>
    );
}

export default Menu;
