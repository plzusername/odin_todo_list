import { showEffect } from "../../../DOM/generate-content/generate-content-section"

function showCreateTaskForm(){
    const taskFormElement = document.querySelector('.create-task-form')

    window.currentTaskForm = event.target.closest('.project-container').dataset.id

    showEffect(taskFormElement)
}

export {showCreateTaskForm}

