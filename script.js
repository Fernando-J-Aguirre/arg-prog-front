async function getUser() {
    const req = await fetch('https://randomuser.me/api/');
    if (!req.ok) await console.log(req.json());
    const { results } = await req.json();
    const user = results[0];
    let favicon = document.getElementById('favicon');
    favicon.href = user.picture.thumbnail;
    loadNavUser(user);
    loadAdditionalUserInfo(user);
    loadContactUserData(user)
}

function loadNavUser(user) {
    let div = document.querySelector('.nav-left');
    let output = '';
    if (user) {
        output += `
            <div class="profile-pic-m-container">
                <img src="${user.picture.medium}" alt="profile picture" class="profile-pic-m">
            </div>
            <a href="#top" class="name nav-link">${user.name.first} ${user.name.last}</a>`
    }
    div.innerHTML = output;
}

function loadUserData(user) {
    return {
        "phone": user.phone,
        "location": user.location.street.name + ' ' + user.location.street.number + ', ' + user.location.city + ', ' + user.location.country,
        "email": user.email
    };
}

function loadAdditionalUserInfo(user) {
    let div = document.querySelector('.personal-info-container');
    let userData = loadUserData(user);
    let output = '';
    if (user) {
        output += `
            <div class="personal-picture">
                <img src="${user.picture.large}" alt="personal picture" class="profile-pic-l">
            </div>
            <div class="container-right">
                <div class="personal-info-right">
                    <div class="div-name">
                        <h2 class="name">${user.name.title}. ${user.name.first} ${user.name.last}<span> (${user.nat})</span></h2>
                    </div>
                    <ul>
                        <div class="div-data">
                            <li class="li-title">Teléfono:</li>
                            <li class="li-sub phone">${userData.phone}</li>
                        </div>
                        <div class="div-data">
                            <li class="li-title">Email:</li>
                            <li class="li-sub"><a href="mailto:${userData.email}" class="mail">${userData.email}</a></li>
                        </div>
                        <div class="div-data">
                            <li class="li-title">Dirección:</li>
                            <li class="li-sub location">${userData.location}</li>
                        </div>
                        <div class="div-data">
                            <li class="li-title">Fecha de Nacimiento:</li>
                            <li class="li-sub date">${stringifyDate(user.dob.date)}</li>
                            <li class="li-sub age">${user.dob.age} años</li>
                        </div>
                    </ul>
                </div>
            </div>`
    }
    div.innerHTML = output;
}

function stringifyDate(dateString) {
    let date = new Date(dateString)
    let year = date.getFullYear()
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function loadContactUserData(user) {
    let loadedUser = loadUserData(user);
    let div = document.querySelector('.contact-info');
    let output = '';
    if (user) {
        output += `
        <h3>Información de contacto</h3>
        <ul>
            <li>Teléfono: <span class="phone">${loadedUser.phone}</span></li>
            <li>Email: <a href="mailto:${loadedUser.email}" class="mail">${loadedUser.email}</a></li>
            <li>Dirección: <span class="location">${loadedUser.location}</span></li>
        </ul>`
    }
    div.innerHTML = output;
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

const navbar = document.querySelector('#nav');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) navbar.classList.remove('disabled');
    else navbar.classList.add('disabled');
    prevScrollpos = currentScrollPos;
});

const navToggle = document.getElementById('nav-toggle');
const navDropdown = document.querySelector('.nav-dropdown');

navDropdown.classList.remove('show');

document.addEventListener('click', e => {
    if (navToggle.contains(e.target)) {
        navDropdown.classList.toggle('show');
    } else if (navDropdown.classList.contains('show') && !navDropdown.contains(e.target)) {
        navDropdown.classList.remove('show');
    }
});

window.addEventListener('scroll', () => {
    navDropdown.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', getUser());