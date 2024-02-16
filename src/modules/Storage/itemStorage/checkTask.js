import { viewAll } from '../../Logic/view-all-projects'
import { projectGenerator } from '../../Logic/project-Generator'
import { content } from '../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../DOM/DOM-functions/generate-DOM-project'
import { Storage, saveStorage } from '../storage-utils/save-storage'
import { generateFilter } from '../../DOM/DOM-functions/generate-filter'

function addProjectToStorage(){
    return Storage
}

function checkTask(){
    const checkBox = event.target
    console.log('HI THERE')

    const parentTask = checkBox.closest('.task-container')
    parentTask.classList.toggle('checked')

    const parentTaskObject = viewAll.projects[checkBox.closest('.project-container').dataset.id].tasks[parentTask.dataset.id]
    parentTaskObject.check()

    saveStorage(addProjectToStorage)

}

export {checkTask}