import { createElement } from '../../../DOM/utility/createElement'
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
    const restoreFromTrashIcon = createElement({class:'restore-from-trash-icon fa-solid fa-trash-can-arrow-up'}, 'i', '', [])
    const removeFromTrashIcon = createElement({class:'remove-from-trash-icon fa-regular fa-circle-xmark'}, 'i', '', [])
    const trashOptions = createElement({class:'trash-icons'}, 'div', '', [restoreFromTrashIcon, removeFromTrashIcon])
    const DOMremovedTask = removeButton.closest('.task-container')

    const clonedTask = DOMremovedTask.cloneNode(true)
    clonedTask.querySelector('.task-delete-icon').remove()
    clonedTask.querySelector('.task-edit-icon').remove()
    clonedTask.children[1].appendChild(trashOptions)


    const parentProjectElement = removeButton.closest('.project-container')
    const parentProjectObj = viewAll.projects[parentProjectElement.dataset.id]

    removedTask = parentProjectObj.tasks[removeButton.closest('.task-container').dataset.id]

    parentProjectObj.removeTask(removedTask)

    DOMtrashSection.appendChild(clonedTask)

    redoIds(trashSection.trashedItems, document.querySelectorAll('.trash-items-container > *'))

    DOMremovedTask.remove()

    const parent_projects_tasks = parentProjectElement.querySelectorAll('.content-section > .project-container  .task-container')

    redoIds(parentProjectObj.tasks, parent_projects_tasks)

    saveStorage(addProjectToStorage)

}

export {removeTaskfromPage}