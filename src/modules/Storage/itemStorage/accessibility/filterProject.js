import { content } from "../../../DOM/generate-content/generate-content-section"
import { switchBetweenSections } from "./sectionSwitching"

function filterProject(){
    const projects = Array.from(window.projects)

    switchBetweenSections()
    
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

