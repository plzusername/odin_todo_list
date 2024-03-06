import { viewAll } from '../../../Logic/view-all-projects'
import { Storage, saveStorage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'

let removedTask
let parentProjectObj
let removeButton

function addProjectToStorage(){
    Storage.projects[parentProjectObj.id].tasks.splice(removeButton.dataset.id,1)
    return Storage
}

function removeTaskfromPage(){

    removeButton = event.target
    const parentProjectElement = removeButton.closest('.project-container')
    parentProjectObj = viewAll.projects[parentProjectElement.dataset.id]

    removedTask = parentProjectObj.tasks[removeButton.closest('.task-container').dataset.id]

    parentProjectObj.removeTask(removedTask)

    saveStorage(addProjectToStorage)

    removeButton.closest('.task-container').remove()

    const parent_projects_tasks = parentProjectElement.querySelectorAll('.task-container')

    redoIds(parentProjectObj.tasks, parent_projects_tasks)

    window.projects = Array.from(document.querySelector('.content-section').querySelectorAll('.project-container')) 

}

export {removeTaskfromPage}