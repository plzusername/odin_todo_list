import { content } from "../../../DOM/generate-content/generate-content-section";

function viewProjects(){
    const projects = content.querySelectorAll('.project-container')

    projects.forEach(project =>{
        project.remove()
    })

    window.projects.forEach(project => {
        content.appendChild(project)
        if(project.style.display == 'none'){
            project.style.display = 'block'
        }
    });
}

export{viewProjects}