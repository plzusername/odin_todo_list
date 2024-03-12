import { showEffect } from "../../../DOM/generate-content/generate-content-section"

function showEditTaskForm(){
    const taskFormElement = document.querySelector('.edit-task-form')

    window.taskToBeEditedIndex = event.target.closest('.task-container').dataset.id
    window.currentTaskForm = event.target.closest('.project-container').dataset.id

    const titleInput = taskFormElement.querySelector('.title-input-task-edit')
    const descriptionInput = taskFormElement.querySelector('.description-input-task-edit')
    const priorityInput = taskFormElement.querySelector('.priority-input-task-edit')
    const dateInput = taskFormElement.querySelector('.due-date-input-task-edit')

    const taskToBeEdited = event.target.closest('.task-container')

    const taskTitle = taskToBeEdited.querySelector('.task-title').innerText
    const taskDescription = taskToBeEdited.querySelector('.task-description').innerText
    const taskPriority = taskToBeEdited.dataset.priority
    const taskDate = taskToBeEdited.querySelector('.task-right-side').querySelector('.task-date-input').value

    titleInput.value = taskTitle
    descriptionInput.value = taskDescription
    priorityInput.value = taskPriority
    dateInput.value = taskDate

    showEffect(taskFormElement)
    
}

export {showEditTaskForm}

