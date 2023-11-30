document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.getElementById("project-list");

    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "project1.jpg",
            link: "#"
        },
        {
            title: "Project 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "project2.jpg",
            link: "#"
        },
        {
            title: "Project 3",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "project3.jpg",
            link: "#"
        },
        // Add more projects as needed
    ];

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(projectElement);
    });
});
