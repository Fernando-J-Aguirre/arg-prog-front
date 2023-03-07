import React from "react";

const experience = [
    {
        title: 'Trabajo 1',
        date: 'DD/MM/AAAA - DD/MM/AAAA',
        description: 'Descripción del trabajo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi vitae numquam vero neque est quasi soluta? Incidunt eaque at sed impedit, doloremque fugiat quisquam voluptatem rem, laborum quas id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempore odit? Similique repudiandae praesentium, enim aspernatur pariatur recusandae odit suscipit quos accusantium? Culpa beatae fugit quis blanditiis aliquam fugiat.'
    },
    {
        title: 'Trabajo 2',
        date: 'DD/MM/AAAA - DD/MM/AAAA',
        description: 'Descripción del trabajo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi vitae numquam vero neque est quasi soluta? Incidunt eaque at sed impedit, doloremque fugiat quisquam voluptatem rem, laborum quas id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempore odit? Similique repudiandae praesentium, enim aspernatur pariatur recusandae odit suscipit quos accusantium? Culpa beatae fugit quis blanditiis aliquam fugiat.'
    },
    {
        title: 'Trabajo 3',
        date: 'DD/MM/AAAA - DD/MM/AAAA',
        description: 'Descripción del trabajo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi vitae numquam vero neque est quasi soluta? Incidunt eaque at sed impedit, doloremque fugiat quisquam voluptatem rem, laborum quas id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempore odit? Similique repudiandae praesentium, enim aspernatur pariatur recusandae odit suscipit quos accusantium? Culpa beatae fugit quis blanditiis aliquam fugiat.'
    },
    {
        title: 'Trabajo 4',
        date: 'DD/MM/AAAA - DD/MM/AAAA',
        description: 'Descripción del trabajo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi vitae numquam vero neque est quasi soluta? Incidunt eaque at sed impedit, doloremque fugiat quisquam voluptatem rem, laborum quas id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates tempore odit? Similique repudiandae praesentium, enim aspernatur pariatur recusandae odit suscipit quos accusantium? Culpa beatae fugit quis blanditiis aliquam fugiat.'
    },
];

function Experience() {

    return (
        <section id="experience" className="section-container">
            <h2 id="title">Experiencia</h2>
            <div className="section-content">
                {experience.map((work, i) => {
                    return (
                        <div className="div-work" key={i}>
                            <div className="work-title">
                                <h3>{work.title}</h3>
                                <p>{work.date}</p>
                            </div>
                            <div className="work-description">
                                <p>{work.description}</p>
                            </div>
                        </div>
                    );
                })};
            </div>
        </section>
    )
}

export default Experience;