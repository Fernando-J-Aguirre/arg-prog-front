import React, { useContext } from "react";
import { UserContext } from '../context/UserContext';


function PersonalInfo() {
    const user = useContext(UserContext);

    function stringifyDate(dateString) {
        let date = new Date(dateString)
        let year = date.getFullYear()
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const location = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}`;

    return (
        <div className="main-section">
            <div className="personal-info-container">
                <div className="personal-picture">
                    <img src={user.picture.large} alt="personal" className="profile-pic-l" />
                </div>
                <div className="container-right">
                    <div className="personal-info-right">
                        <div className="div-name">
                            <h2 className="name">{user.name.title}. {user.name.first} {user.name.last}<span> ({user.nat})</span></h2>
                        </div>
                        <ul>
                            <div className="div-data">
                                <li className="li-title">Teléfono:</li>
                                <li className="li-sub phone">{user.phone}</li>
                            </div>
                            <div className="div-data">
                                <li className="li-title">Email:</li>
                                <li className="li-sub"><a href={`mailto:${user.email}`} className="mail">{user.email}</a></li>
                            </div>
                            <div className="div-data">
                                <li className="li-title">Dirección:</li>
                                <li className="li-sub location">{location}</li>
                            </div>
                            <div className="div-data">
                                <li className="li-title">Fecha de Nacimiento:</li>
                                <li className="li-sub date">{stringifyDate(user.dob.date)}</li>
                                <li className="li-sub age">{user.dob.age} años</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;