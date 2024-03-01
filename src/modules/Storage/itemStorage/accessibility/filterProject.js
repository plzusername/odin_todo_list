import { content } from "../../../DOM/generate-content/generate-content-section"

function filterProject(){
    const projects = Array.from(window.projects)
    const projectsToBeDeleted = Array.from(document.querySelectorAll('.project-container'))

    projectsToBeDeleted.forEach(project =>{
        project.remove()
    })

    projects.forEach(project =>{
        content.appendChild(project)
    })

    const clickedProjectID = event.target.dataset.id

    projects.forEach(project =>{
        if(project.dataset.id != clickedProjectID && clickedProjectID != undefined){
            project.remove()
        }
    })
}

export {filterProject}

