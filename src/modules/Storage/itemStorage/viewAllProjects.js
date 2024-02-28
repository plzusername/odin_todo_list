import { content } from "../../DOM/generate-content/generate-content-section";

function viewProjects(){
    const projects = content.querySelectorAll('.project-container')

    projects.forEach(project =>{
        project.remove()
    })

    window.projects.forEach(project => {
        content.appendChild(project)
        project.style.display = 'block'
    });
}

export{viewProjects}