// Footer
const footer = document.createElement('footer');

// Dynamic date
const today = new Date();
const thisYear = today.getFullYear();
footer.innerHTML = `<p>&copy; ${thisYear} Kathryn. All rights reserved.</p>`;
document.body.appendChild(footer);

//Skills
const skills = ["Javascript", "HTML", "CSS", "Adobe Photoshop", "Github"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");
if (skillsSection) {
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });


}


// FETCH API
const githubUsername = 'xpwet';
fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })

    // Which is right
    .then(repositories => {
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('.projects');
        projectList.innerHTML ='';
        repositories.forEach(repo => {
            const project = document.createElement('li');
            project.innerText = repo.name;
            projectList.appendChild(project);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        const projectList = projectSection.querySelector('.project-list');
        projectList.innerHTML = '<li> Sorry, something went wrong. Please try again later.</li>';
    });

// Is it this
    then(text => {
        const repositories = JSON.parse(text);
        if (repositories.length === 0) {
            console.log ('You have no repositories or the Projects section is empty.');
        } else {
           console.log(repositories);
        repositories.forEach(repo => {
            console.log(`Repo name: &{repo.name}, URL: ${repo.html_url}`);
        });
    }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        console.log('Sorry, something went wrong with fetching your repositories. Please try again later.');
    });
