// Dynamically Adding the Copyright Date
const thisYear = new Date().getFullYear();
const footer = document.querySelector("footer");
if (footer) {
    footer.innerHTML = `<p>\u00A9 ${thisYear} Kathryn. All rights reserved.</p>`;
}

// Skills Section - Dynamically Adding Skills
const skills = ["Javascript", "HTML", "CSS", "Adobe Photoshop", "Github"];
const skillsSection = document.querySelector("#skills");
if (skillsSection) {
    const skillsList = skillsSection.querySelector("ul");
    if (skillsList) {
        skills.forEach(skill => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
    } else {
        console.error("No <ul> element found in #skills section.");
    }
} else {
    console.error("No #skills section found.");
}

// Message Submission Form - Adding New Messages to List
const messageForm = document.forms['leave_message'];
if (messageForm) {
    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log('Name:', usersName);
        console.log('Email:', usersEmail);
        console.log('Message:', usersMessage);

        // Reset the form after submission
        messageForm.reset();

        // Find the message section and add new message
        const messageSection = document.getElementById('messages');
        if (messageSection) {
            const messageList = messageSection.querySelector('ul');
            if (messageList) {
                const newMessage = document.createElement('li');
                const date = new Date().toLocaleString();  // Get the current date and time
                newMessage.innerHTML = `
                    <a href="mailto:${usersEmail}">${usersName}</a>
                    <span>: ${usersMessage}</span>
                    <br><small>${date}</small>
                `;

                // Create and append the remove button
                const removeButton = document.createElement('button');
                removeButton.innerText = 'Remove';
                removeButton.type = 'button';
                removeButton.addEventListener('click', function () {
                    const entry = removeButton.parentNode;
                    entry.remove();
                });

                // Append the remove button to the new message and append the message to the list
                newMessage.appendChild(removeButton);
                messageList.appendChild(newMessage);
            } else {
                console.error('No <ul> element found in #messages section.');
            }
        } else {
            console.error('No #messages section found.');
        }
    });
} else {
    console.error('No message form found.');
}

// Fetch API for GitHub Projects
const githubUsername = 'xpwetx';  // Correct username
const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;  // Correct API URL

const fetchGitHubRepos = () => {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
        })
        .then(repositories => {
            const projectSection = document.getElementById('projects'); // Assuming you have a 'projects' section
            const projectList = projectSection.querySelector('.project-list');

            // Clear the project list before adding new data
            projectList.innerHTML = '';

            if (repositories.length === 0) {
                projectList.innerHTML = '<li>No repositories found.</li>';
            } else {
                // Loop through the repositories and display them
                repositories.forEach(repo => {
                    const project = document.createElement('li');
                    project.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                    projectList.appendChild(project);
                });
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            const projectSection = document.getElementById('projects');
            const projectList = projectSection.querySelector('.project-list');
            if (projectList) {
                projectList.innerHTML = '<li>Sorry, something went wrong. Please try again later.</li>';
            }
        });
};

// Call the function to fetch GitHub repositories when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubRepos);
