import { content } from "../../../DOM/generate-content/generate-content-section"
import { Storage } from "../../storage-utils/save-storage"
import { projectDomify } from "../../../DOM/DOM-functions/generate-DOM-project";
import { generateFilter } from "../../../DOM/DOM-functions/generate-filter";
import { createTask } from "../../../DOM/DOM-functions/create-task-DOM";
import { noteDomification } from "../../../DOM/DOM-functions/noteDomification";
import { repurposeIcons } from "../../../DOM/DOM-functions/createTrashSection";

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
function domifyStorageTrash(){
    const DOMtrash = []
    const trashItemsSection = document.querySelector('.trash-items-container')

    Storage.trash.forEach(trashedItem => {
        const DOMitem = trashedItem.priority == undefined ? noteDomification(trashedItem) : createTask(trashedItem)
        const trashItem = repurposeIcons(DOMitem)
        trashItemsSection.appendChild(trashItem)
        DOMtrash.push(DOMitem)
    });

    return DOMtrash
}

export {domifyStorageProjects, reinstateFilters, domifyStorageTrash}