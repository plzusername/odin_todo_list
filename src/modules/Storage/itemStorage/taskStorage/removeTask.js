import { viewAll } from '../../../Logic/view-all-projects'
import { Storage, saveStorage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'

let removedTask

function addProjectToStorage(){
    Storage.projects = viewAll.projects
    return Storage
}

function removeTaskfromPage(){

    const removeButton = event.target
    const parentProjectElement = removeButton.closest('.project-container')
    const parentProjectObj = viewAll.projects[parentProjectElement.dataset.id]

    removedTask = parentProjectObj.tasks[removeButton.closest('.task-container').dataset.id]

    parentProjectObj.removeTask(removedTask)

    saveStorage(addProjectToStorage)

    removeButton.closest('.task-container').remove()

    const parent_projects_tasks = parentProjectElement.querySelectorAll('.task-container')

    redoIds(parentProjectObj.tasks, parent_projects_tasks)

}

export {removeTaskfromPage}