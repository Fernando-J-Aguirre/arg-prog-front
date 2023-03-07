export const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
};
