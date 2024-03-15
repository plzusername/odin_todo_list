import { viewAll } from "../../../Logic/view-all-projects"
import { Storage, saveStorage } from "../../storage-utils/save-storage"
import { projectGenerator } from "../../../Logic/project-Generator"

function changeTaskProject(){
    Storage.projects = viewAll.projects
    return Storage
}

function MoveItem(evt){
    const movedTask = evt.item
    const taskNewPosition = evt.newIndex
    const taskOldPosition = evt.oldIndex
    const parentProject = viewAll.projects[evt.from.closest('.project-container').dataset.id]
    const newParentProject = viewAll.projects[evt.to.closest('.project-container').dataset.id]
    const taskToBeMoved = parentProject.tasks[taskOldPosition]

    parentProject.changeProject(newParentProject, taskToBeMoved, taskNewPosition)


    // const taskParentProjectObject = viewAll.projects[taskParentProject.dataset.id]
    

    saveStorage(changeTaskProject)

    // const parentProject = document.querySelector(`.project-container[data-id="${window.currentTaskForm}"]`).querySelector('.task-parent-container')

    // const parentProjectObject = viewAll.projects[window.currentTaskForm]

    // parentProjectObject.addTask(generatedTask)

    // saveStorage(addTaskToProjectStorage)

    // titleInput.value = ''
    // descriptionInput.value = ''
    // dueDateInput.value = null
    // priorityInput.selectedIndex = 0

    // parentProject.appendChild(createTask(generatedTask))

}

export {MoveItem}