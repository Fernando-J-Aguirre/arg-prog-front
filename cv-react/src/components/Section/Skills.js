import React from "react";

const skills = [
    {
        title: 'Habilidades Técnicas',
        skillArr: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3']
    },
    {
        title: 'Idiomas',
        skillArr: ['Idioma 1', 'Idioma 2', 'Idioma 3']
    },
    {
        title: 'Programas y Herramientas',
        skillArr: ['Programa/Herramienta 1', 'Programa/Herramienta 2', 'Programa/Herramienta 3']
    }
]

function Skills() {

    return (
        <section id="skills" className="section-container">
            <h2 id="title">Aptitudes</h2>
            <div className="section-content">
                {skills.map((item, i) => {
                    return (
                        <div className="skills-list" key={i}>
                            <h3>{item.title}</h3>
                            <ul>
                                {item.skillArr.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;