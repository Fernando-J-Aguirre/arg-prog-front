import React, { useContext } from "react";
import { UserContext } from '../../context/UserContext';

function Contact() {
    const user = useContext(UserContext);

    const location = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}`;

    return (
        <section id="contact" className="section-container">
            <h2 id="title">Contacto</h2>
            <div className="section-content">
                <div className="contact-info">
                    <h3>Información de contacto</h3>
                    <ul>
                        <li>
                            Teléfono: <span className="phone">{user.phone}</span>
                        </li>
                        <li>
                            Email:
                            <a href={`mailto:${user.email}`} className="mail">
                                {user.email}
                            </a>
                        </li>
                        <li>
                            Dirección: <span className="location">{location}</span>
                        </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <h3>Envíame un mensaje</h3>
                    <form>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" rows="6" name="message"></textarea>
                        <input type="submit" value="Enviar" id="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;