"use strict";
const personalInfo = {
    name: "Sarfraz Ahmad",
    title: "Graphic Designer and Web Developer",
    phone: "+3323487941",
    email: "uniqueluck68@gmail.com",
    address: "Karachi",
    profileSummary: "I am a graphic designer and web developer dedicated to creating visually impactful and user-centered digital experiences. With a strong foundation in both design principles and web technologies, I specialize in crafting responsive, engaging websites and compelling graphics that align with business goals. I am also skilled in implementing branding strategies and designing for both digital and print media. My approach is to make designs not only visually appealing but functional and intuitive, understanding that every project is a work in progress, always evolving with new ideas. I am driven by the opportunity to tackle fresh challenges and bring creative solutions to life."
};
const experiences = [
    {
        role: "Freelancer",
        company: "Freelance",
        period: "Mar 2019 - Present",
        description: "Created safety-first digital experiences for users, enhancing trust and usability across platforms."
    },
    {
        role: "UI / UX Designer",
        company: "ABC Co.",
        period: "June 2019 - Present",
        description: "Developed safety-focused visual designs that communicate trust and clarity, enhancing the user experience across various platforms."
    },
    {
        role: "Graphic Designer",
        company: "Freelance",
        period: "June 2022 - Present",
        description: "Built secure, user-friendly web interfaces that prioritize user safety and smooth navigation across devices."
    },
    {
        role: "Web Developer",
        company: "Freelance",
        period: "June 2022 - Present",
        description: "Developed web solutions that connect physical and digital environments, providing cohesive and accessible user experiences."
    }
];
const skills = [
    { skill: "Figma" },
    { skill: "Adobe Photoshop" },
    { skill: "Adobe Illustrator" },
    { skill: "Web Development" }
];
const educations = [
    {
        degree: "B.Com",
        institution: "University of Karachi",
        year: "2007"
    }
];
const createSection = (title, content) => {
    const section = document.createElement('section');
    const h3 = document.createElement('h3');
    h3.textContent = title;
    section.appendChild(h3);
    section.appendChild(content);
    return section;
};
const createListItem = (content) => {
    const li = document.createElement('li');
    li.textContent = content;
    return li;
};
const app = document.getElementById('app');
if (app) {
    // Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = personalInfo.name;
    const h2 = document.createElement('h2');
    h2.textContent = personalInfo.title;
    const p = document.createElement('p');
    p.textContent = `${personalInfo.phone} | ${personalInfo.email} | ${personalInfo.address}`;
    header.appendChild(h1);
    header.appendChild(h2);
    header.appendChild(p);
    app.appendChild(header);
    // Profile Section
    const profileSection = createSection('Profile', document.createElement('div'));
    const profileContent = profileSection.querySelector('div');
    if (profileContent) {
        profileContent.textContent = personalInfo.profileSummary;
        app.appendChild(profileSection);
    }
    // Experience Section
    const experienceSection = createSection('Experience', document.createElement('div'));
    const experienceContent = experienceSection.querySelector('div');
    if (experienceContent) {
        experiences.forEach(exp => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${exp.role}</strong> at <em>${exp.company}</em> (${exp.period})<br>${exp.description}`;
            experienceContent.appendChild(div);
        });
        app.appendChild(experienceSection);
    }
    // Skills Section
    const skillsSection = createSection('Skills', document.createElement('ul'));
    const skillsContent = skillsSection.querySelector('ul');
    if (skillsContent) {
        skills.forEach(skill => {
            skillsContent.appendChild(createListItem(skill.skill));
        });
        app.appendChild(skillsSection);
    }
    // Education Section
    const educationSection = createSection('Education', document.createElement('div'));
    const educationContent = educationSection.querySelector('div');
    if (educationContent) {
        educations.forEach(edu => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${edu.degree}</strong> from <em>${edu.institution}</em> (${edu.year})`;
            educationContent.appendChild(div);
        });
        app.appendChild(educationSection);
    }
}
