async function getUser() {
    const req = await fetch('https://randomuser.me/api/');
    if (!req.ok) console.log(await req.json());
    const { results } = await req.json();
    const user = results[0];
    if (!user) handleLoad();
    loadFavicon(user)
    loadNavUser(user);
    loadAdditionalUserInfo(user);
    loadContactUserData(user)
}

function handleLoad() {
    const body = document.getElementsByTagName('body');
    body[0].innerHTML = '<h1 class="loading">Loading...</h1>';
}

function loadFavicon(user) {
    if (user) {
        const favicon = document.getElementById('favicon');
        favicon.href = user.picture.thumbnail;
    }
}

function loadNavUser(user) {
    const div = document.querySelector('.nav-left');
    let output = '';
    if (user) {
        output += `
            <div class="profile-pic-m-container">
                <img src="${user.picture.medium}" alt="profile picture" class="profile-pic-m">
            </div>
            <a href="#top" class="name link">${user.name.first} ${user.name.last}</a>`
    }
    div.innerHTML = output;
    const scrollLink = document.querySelector('.link');
    scrollToSection(scrollLink);
}

function loadUserData(user) {
    if (user) {
        return {
            "phone": user.phone,
            "location": user.location.street.name + ' ' + user.location.street.number + ', ' + user.location.city + ', ' + user.location.country,
            "email": user.email
        };
    }
}

function loadAdditionalUserInfo(user) {
    const div = document.querySelector('.personal-info-container');
    const userData = loadUserData(user);
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
    const loadedUser = loadUserData(user);
    const div = document.querySelector('.contact-info');
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

function scrollToSection(selector) {
    selector.addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector(selector.getAttribute('href'));
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    })
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    scrollToSection(link);
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