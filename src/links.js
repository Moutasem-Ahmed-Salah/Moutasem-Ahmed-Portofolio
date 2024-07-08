function scrollToProjects() {
    const projectsSection = document.getElementById('contact');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Add an event listener to the "Projects" link
const projectsLink = document.getElementById('contact');
projectsLink.addEventListener('click', scrollToProjects);
