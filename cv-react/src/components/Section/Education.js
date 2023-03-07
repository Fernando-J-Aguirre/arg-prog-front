import React from "react";

const education = [
    {
        title: 'Estudio 1',
        institution: 'Institución: Nombre de la institución',
        date: 'Fechas: DD/MM/AAAA - DD/MM/AAAA',
        studyTitle: 'Título obtenido'
    },
    {
        title: 'Estudio 2',
        institution: 'Institución: Nombre de la institución',
        date: 'Fechas: DD/MM/AAAA - DD/MM/AAAA',
        studyTitle: 'Título obtenido'
    },
    {
        title: 'Estudio 3',
        institution: 'Institución: Nombre de la institución',
        date: 'Fechas: DD/MM/AAAA - DD/MM/AAAA',
        studyTitle: 'Título obtenido'
    }
];

function Education() {
    return (
        <section id="education" className="section-container">
            <h2 id="title">Formación</h2>
            <div className="section-content">
                <ul>
                    {education.map((ed, i) => {
                        return (
                            <li className="div-education" key={i}>
                                <div className="education-title">
                                    <h3>{ed.title}</h3>
                                </div>
                                <div className="education-description">
                                    <p>{ed.institution}</p>
                                    <p>{ed.date}</p>
                                    <p>{ed.studyTitle}</p>
                                </div>
                            </li>
                        );
                    })};
                    <li className="div-education">
                        <div className="education-title">
                            <h3>Estudio 2</h3>
                        </div>
                        <div className="education-description">
                            <p>Institución: Nombre de la institución</p>
                            <p>Fechas: DD/MM/AAAA - DD/MM/AAAA</p>
                            <p>Título obtenido</p>
                        </div>
                    </li>
                    <li className="div-education">
                        <div className="education-title">
                            <h3>Estudio 3</h3>
                        </div>
                        <div className="education-description">
                            <p>Institución: Nombre de la institución</p>
                            <p>Fechas: DD/MM/AAAA - DD/MM/AAAA</p>
                            <p>Título obtenido</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;