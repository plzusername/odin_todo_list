import { content } from "../../../DOM/generate-content/generate-content-section"
import { switchBetweenSections } from "./sectionSwitching"
import { domifyStorageProjects } from "../projectStorage/domifyProjectStorage"

function filterProject(){
    switchBetweenSections()

    let clickedProjectID = event.target.dataset.id || event.target.closest('.project-filter').dataset.id
    const DOMProjects = domifyStorageProjects()

    DOMProjects.forEach(project =>{
        if(project.dataset.id != clickedProjectID){
            project.remove()
        }
    })
}

export {filterProject}

