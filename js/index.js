// Dynamic Date for Copyright
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
                newMessage.innerHTML = `
                    <a href="mailto:${usersEmail}">${usersName}</a>
                    <span>: ${usersMessage}</span>
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


// FETCH API
const githubUsername = 'xpwet';
fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })


    .then(repositories => {
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('.project-list');
        projectList.innerHTML = '';
        
    
        if (repositories.length === 0) {
            projectList.innerHTML = '<li>No repositories found.</li>';
        } else {
        repositories.forEach(repo => {
            const project = document.createElement('li');
            project.innerHTML = `<a href="$repo.html_url}" target="_blank">${repo.name}</a>`;
            projectList.appendChild(project);
        });
    }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('.project-list');
        if (projectList) {
            projectList.innerHTML = '<li> Sorry, something went wrong. Please try again later.</li>';
        } else {
            console.error("Project section not found.");
        }
    });


then(repositories => {
    if (repositories.length === 0) {
        console.log('You have no repositories or the Projects section is empty.');
    } else {
        repositories.forEach(repo => {
            console.log(`Repo name: ${repo.name}, URL: ${repo.html_url}`);
        });
    }
})
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        console.log('Sorry, something went wrong with fetching your repositories. Please try again later.');
    });
