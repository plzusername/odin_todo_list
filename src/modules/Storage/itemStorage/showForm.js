import { viewAll } from '../../Logic/view-all-projects'
import { taskGenerator } from '../../Logic/task-generator'
import { content, taskForm } from '../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../DOM/DOM-functions/generate-DOM-project'
import { Storage, saveStorage } from '../storage-utils/save-storage'

let generatedTask

const CircularJSON = require('circular-json')


function addProjectToStorage(){
    if (typeof Storage == 'string'){
        let parsedStorage = CircularJSON.parse(Storage)
        parsedStorage.projects.push(generatedProject)
        return parsedStorage
    }
    Storage.projects.push(generatedProject)
    return Storage
}

function showCreateTaskForm(){
    const taskFormElement = document.querySelector('.create-task-form')

    taskFormElement.classList.add('visible')

    window.currentTaskForm = event.target.closest('.project-container').dataset.id
    
    // generatedProject = new taskGenerator()

    // viewAll.addProject(generatedProject)

    // saveStorage(addProjectToStorage)

    // content.appendChild(projectDomify(generatedProject))

}

export {showCreateTaskForm}

