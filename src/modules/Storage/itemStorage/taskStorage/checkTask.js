import { viewAll } from '../../../Logic/view-all-projects'
import { Storage, saveStorage } from '../../storage-utils/save-storage'

function addProjectToStorage(){
    Storage.projects = viewAll.projects
    return Storage
}

function checkDOMchanges(task,taskDOM){
    taskDOM.querySelector('input[type="checkbox"]').checked = task.checked
    if(task.checked){
        taskDOM.classList.add('checked')
        return null
    }
    taskDOM.classList.remove('checked')
}

function checkTask(){
    const checkBox = event.target

    const parentTask = checkBox.closest('.task-container')

    const parentTaskObject = viewAll.projects[checkBox.closest('.project-container').dataset.id].tasks[parentTask.dataset.id]
    parentTaskObject.check()

    checkDOMchanges(parentTaskObject, parentTask)

    saveStorage(addProjectToStorage)

}

export {checkTask, checkDOMchanges}


// import { viewAll } from '../../../Logic/view-all-projects'
// import { Storage, saveStorage } from '../../storage-utils/save-storage'
// import { regeneratePrototype } from '../../../Logic/regeneratePrototype'

// let checkBox
// let parentTask
// let parentTaskObject

// function addProjectToStorage(){
//     let regeneratedStorage = regeneratePrototype()
//     console.log(regeneratedStorage.projects[checkBox.closest('.project-container').dataset.id].tasks[checkBox.closest('.project-container').dataset.id])
//     regeneratedStorage.projects[checkBox.closest('.project-container').dataset.id].tasks[checkBox.closest('.project-container').dataset.id].check()
//     return regeneratedStorage
// }

// function checkTask(){
//     checkBox = event.target

//     parentTask = checkBox.closest('.task-container')
//     parentTask.classList.toggle('checked')

//     console.log(viewAll.projects[checkBox.closest('.project-container').dataset.id])

//     parentTaskObject = viewAll.projects[checkBox.closest('.project-container').dataset.id].tasks[parentTask.dataset.id]
//     parentTaskObject.check()

//     saveStorage(addProjectToStorage)

// }

// export {checkTask}