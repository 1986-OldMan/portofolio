document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.getElementById("project-list");

    const projects = [
        {
            title: "Goldera project",
            description: "My first project where I learned backend and created a small functional application on certain parts and others are still under development.",
            image: "./img/Goldera-my-project.jpg",
            link: "https://github.com/1986-OldMan/Goldera-project",
        },
        {
            title: "Function to import, delete data from DB",
            description: "This project was to import/delete data from database with process.argv, JSON file, .ENV, mongoDB, node.js file system",
            image: "https://www.clipartmax.com/png/small/17-173093_data-import-data-import.png",
            link: "https://github.com/1986-OldMan/Import-delete-data-from-DB"
        },
        {
            title: "Guess my number",
            description: "A small game where you have to guess the number and have a limited number of attempts.",
            image: "./img/Guess-my-number.jpg",
            link: "https://github.com/1986-OldMan/Guess-My-Number"
        },
    ];

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        document.getElementById("project-list").style.fontSize = "21px"
        
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="project-link">View Project</a>
        `;

        projectsContainer.appendChild(projectElement);
    });
});
