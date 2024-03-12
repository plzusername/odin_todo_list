import { content } from "../../../DOM/generate-content/generate-content-section"
import { Storage } from "../../storage-utils/save-storage"
import { projectDomify } from "../../../DOM/DOM-functions/generate-DOM-project";
import { generateFilter } from "../../../DOM/DOM-functions/generate-filter";

function domifyStorageProjects(){
    const DOMprojects = []

    Storage.projects.forEach(project => {
        const DOMproject = projectDomify(project)
        content.appendChild(DOMproject)
        DOMprojects.push(DOMproject)
    });

    return DOMprojects
}
function reinstateFilters(){
    const sideBarProjects = document.querySelector('.sideBar-projects-section')
    Storage.projects.forEach(project => {
        const projectFilter = generateFilter(project.title, 'project-filter')
        projectFilter.dataset.id = project.id
        sideBarProjects.appendChild(projectFilter)
    });

}

export {domifyStorageProjects, reinstateFilters}