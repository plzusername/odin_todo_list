function showCreateTaskForm(){
    const taskFormElement = document.querySelector('.create-task-form')

    taskFormElement.classList.add('visible')

    window.currentTaskForm = event.target.closest('.project-container').dataset.id

    const formAffect = document.querySelector('.form-affect')
    formAffect.classList.add('form-affect-visible')
}

export {showCreateTaskForm}

