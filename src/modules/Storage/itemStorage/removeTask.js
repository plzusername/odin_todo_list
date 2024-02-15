import { viewAll } from '../../Logic/view-all-projects'
import { Storage, saveStorage } from '../storage-utils/save-storage'
import { redoIds } from '../../Logic/redoIds'

const CircularJSON = require('circular-json')

let removedTask

function addProjectToStorage(){
    if (typeof Storage == 'string'){
        // let parsedStorage = CircularJSON.parse(Storage)
        // parsedStorage.projects[event.target.closest('.project-container').dataset.id].removeTask(removedTask)
        // redoIds(parsedStorage.projects[event.target.closest('.project-container').dataset.id].tasks)
        return parsedStorage
    }
    // console.log(Storage.projects[event.target.closest('.project-container').dataset.id])
    // Storage.projects[event.target.closest('.project-container').dataset.id].removeTask(removedTask)
    // redoIds(Storage.projects[event.target.closest('.project-container').dataset.id].tasks)
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