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
const skillsList= skillsSection.querySelector("ul");
if (skillsSection) {
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });


}
