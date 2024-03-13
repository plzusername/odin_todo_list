import { repurposeIcons } from '../../../DOM/DOM-functions/createTrashSection'
import { viewAll } from '../../../Logic/view-all-projects'
import { Storage, saveStorage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'
import { trashSection } from '../../../Logic/trash-section'

let removedTask

function addProjectToStorage(){
    Storage.projects = viewAll.projects
    Storage.trash = trashSection.trashedItems
    return Storage
}

function removeTaskfromPage(){
    const removeButton = event.target

    const DOMtrashSection = document.querySelector('.trash-section > .trash-items-container')
    const DOMremovedTask = removeButton.closest('.task-container')

    const clonedTask = DOMremovedTask.cloneNode(true)

    const trashedTask = repurposeIcons(clonedTask)

    const parentProjectElement = removeButton.closest('.project-container')
    const parentProjectObj = viewAll.projects[parentProjectElement.dataset.id]

    removedTask = parentProjectObj.tasks[removeButton.closest('.task-container').dataset.id]

    parentProjectObj.removeTask(removedTask)

    DOMtrashSection.appendChild(trashedTask)

    redoIds(trashSection.trashedItems, document.querySelectorAll('.trash-items-container > *'))

    DOMremovedTask.remove()

    const parent_projects_tasks = parentProjectElement.querySelectorAll('.content-section > .project-container  .task-container')

    redoIds(parentProjectObj.tasks, parent_projects_tasks)

    saveStorage(addProjectToStorage)

}

export {removeTaskfromPage}