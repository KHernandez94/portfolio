
import { useState } from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNode, FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { Education } from "../components/education/education";


export const SkillsPage = () => {

    const [selectedSkill, setSelectedSkill] = useState(null);


    const skills = [
        {
            id: "js", icon: <FaJs color='#FFDF00' size={90} />, name: "JavaScript", description:
                (<>
                    <ul style={{ textAlign: 'justify', color: '#274659' }}>
                        <li>Peticiones HTTP</li>
                        <li>Async y Await</li>
                        <li>Sentencias y declaraciones como: 'do-while', 'if-else','const', etc.</li>
                    </ul>
                </>)
        },


        {
            id: "css", icon: <FaCss3Alt color='#2062AF' size={90} />, name: "CSS", description: (<>

                <ul style={{ textAlign: 'justify', color: '#274659' }}>
                    <li>Estilos a las páginas web.</li>
                </ul>
            </>)
        },


        {
            id: "html", icon: <FaHtml5 color='#DE4C26' size={90} />, name: "HTML", description: (<>
                <ul style={{ textAlign: 'center', color: '#274659' }}>
                    <li>Maquetado</li>
                </ul>
            </>)
        },


        {
            id: "react", icon: <FaReact color='#61DAFC' size={90} />, name: "React", description: (<>
                <ul style={{ textAlign: 'justify', color: '#274659' }}>
                    <li>Hooks: useEfect, useState, etc.</li>
                    <li>Pruebas Unitarias con jest</li>
                    <li>Single Page (SPA)</li>
                </ul>
            </>)
        },


        {
            id: "bootstrap", icon: <FaBootstrap color='#5B4292' size={90} />, name: "Bootstrap", description: (<>
                <ul style={{ textAlign: 'justify', color: '#274659' }}>
                    <li>Responsive</li>
                    <li>Components: 'button', 'cards', etc.</li>
                    <li>Layout: 'Grid', 'Containers', 'Columns'</li>
                </ul>
            </>)
        },


        {
            id: "node", icon: <FaNode color='green' size={90} />, name: "Node.js"
        },


        {
            id: "git", icon: <FaGitAlt color='#E94F32' size={90} />, name: "Git"
        },


        {
            id: "mysql", icon: <SiMysql color='#015F88' size={90} />, name: "MySQL", description: (<>
                <ul style={{ textAlign: 'justify', color: '#274659' }}>
                    <li>Uso de query (CRUD)</li>
                    <li>Creación de DER</li>
                </ul>
            </>)
        }
    ];

    const handleSkillClick = (id) => {
        setSelectedSkill(id === selectedSkill ? null : id);
    };

    return (
        <>
            <div className="mt-5 text-center">
                <h1 className="animate__animated animate__bounceInDown">Conocimiento / Habilidades</h1>
            </div>

            <div className="container overflow-hidden">
                <div className="row text-center">
                    {skills.map(skill => (
                        <div
                            key={skill.id}
                            className={`col-lg-3 col-md-4 col-sm-6 my-4 d-flex flex-column align-items-center
                            ${selectedSkill === skill.id ? "animate__animated animate__pulse" : ""}`}
                        >
                            <button
                                className="btn"
                                onClick={() => handleSkillClick(skill.id)}
                                style={{
                                    background: 'none', border: 'none', transition: "transform 0.3s ease-in-out",
                                    transform: selectedSkill === skill.id ? "scale(1.2)" : "scale(1)"
                                }}
                            >
                                {skill.icon}
                            </button>

                            {selectedSkill === skill.id && skill.description && (
                                <div
                                    className="text-dark mt-2 p-2 rounded text-center"
                                    style={{
                                        display: "block",
                                        padding: "10px 15px",
                                        minWidth: "150px",
                                        margin: "0 auto",
                                        borderRadius: "10px",
                                        backgroundColor: 'white',
                                        boxShadow: "0px 0px 10px rgba(34, 186, 187, 0.7)",
                                        transition: "box-shadow 0.5s ease-in-out"
                                    }}
                                >
                                    {skill.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Education />
            </div>

        </>
    );
};
