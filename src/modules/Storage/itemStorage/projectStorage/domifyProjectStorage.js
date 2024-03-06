import { content } from "../../../DOM/generate-content/generate-content-section"
import { Storage } from "../../storage-utils/save-storage"
import { projectDomify } from "../../../DOM/DOM-functions/generate-DOM-project";
import { createTask } from "../../../DOM/DOM-functions/create-task-DOM";
import { generateFilter } from "../../../DOM/DOM-functions/generate-filter";
import { sideBar } from '../../../DOM/generate-content/generate-sideBar'

function domifyStorageProjects(){
    const DOMprojects = []

    Storage.projects.forEach(project => {
        const DOMproject = projectDomify(project)
        project.tasks.forEach(task =>{
            const DOMtask = createTask(task)
            DOMproject.appendChild(DOMtask)
        })
        content.appendChild(DOMproject)
        DOMprojects.push(DOMproject)
    });

    return DOMprojects
}
function reinstateFilters(){
    Storage.projects.forEach(project => {
        const projectFilter = generateFilter(project.title, 'project-filter')
        projectFilter.dataset.id = project.id
        sideBar.appendChild(projectFilter)
    });

}

export {domifyStorageProjects, reinstateFilters}