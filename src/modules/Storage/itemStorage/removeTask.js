import { viewAll } from '../../Logic/view-all-projects'
import { Storage, saveStorage } from '../storage-utils/save-storage'
import { filterEmptyProjects } from '../../Logic/remove-empty-project'

const CircularJSON = require('circular-json')

let removedTask

function addProjectToStorage(){
    if (typeof Storage == 'string'){
        let parsedStorage = CircularJSON.parse(Storage)
        parsedStorage.projects[event.target.closest('.project-container').dataset.id].tasks.splice(event.target.closest('.task-container').dataset.id,1)
        Storage.projects = filterEmptyProjects(Storage.projects)
        return parsedStorage
    }
    Storage.projects[event.target.closest('.project-container').dataset.id].tasks.splice(event.target.closest('.task-container').dataset.id,1)
    Storage.projects = filterEmptyProjects(Storage.projects)
    return Storage
}

function removeTaskfromPage(){

    const removeButton = event.target
    const parentProjectObj = viewAll.projects[removeButton.closest('.project-container').dataset.id]

    removedTask = parentProjectObj[removeButton.dataset.id]

    parentProjectObj.removeTask(removedTask)

    viewAll.projects = filterEmptyProjects(viewAll.projects)

    saveStorage(addProjectToStorage)


    if(removeButton.closest('.project-container').children.length == 3){
        const correspndingProjectFilter = document.querySelector(`.project-filter[data-id="${removeButton.closest('.project-container').dataset.id}"]`)

        removeButton.closest('.project-container').remove()
        correspndingProjectFilter.remove()

        return null
    }

    removeButton.closest('.task-container').remove()

}

export {removeTaskfromPage}