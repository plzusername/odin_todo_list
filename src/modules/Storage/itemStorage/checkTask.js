import { viewAll } from '../../Logic/view-all-projects'
import { Storage, saveStorage } from '../storage-utils/save-storage'

function addProjectToStorage(){
    return Storage
}

function checkTask(){
    const checkBox = event.target

    const parentTask = checkBox.closest('.task-container')
    parentTask.classList.toggle('checked')

    const parentTaskObject = viewAll.projects[checkBox.closest('.project-container').dataset.id].tasks[parentTask.dataset.id]
    parentTaskObject.check()

    saveStorage(addProjectToStorage)

    window.projects = Array.from(document.querySelector('.content-section').querySelectorAll('.project-container')) 

}

export {checkTask}