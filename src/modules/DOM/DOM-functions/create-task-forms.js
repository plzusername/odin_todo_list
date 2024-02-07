import { createElement } from "../utility/createElement"

function createGenerateTaskForm(){
    const formHeader=createElement({class:'task-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-task'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-task-section'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-task'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-task-section'}, 'label', 'Description:', [descriptionInput])

    const priorityInput=createElement({class:'priority-input-task'}, 'input', '', [])
    const priorityInputSection=createElement({class:'priority-input-task-section'}, 'label', 'Priority:', [priorityInput])

    const dueDateInput=createElement({class:'due-date-input-task'}, 'input', '', [])
    const dueDateInputSection=createElement({class:'due-date-input-task-section'}, 'label', 'Due Date:', [dueDateInput])

    const submitButton=createElement({class:'task-submit-button'} ,'button', `task`)


    const taskForm=createElement({class:`task-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,priorityInputSection,dueDateInputSection,submitButton])
    
    formHeader.textContent = 'Create form'

    submitButton.addEventListener('click' , /*Create task with DOM logic and storage*/)

    return taskForm

}

function createEditTaskForm(){
    const formHeader=createElement({class:'task-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-task'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-task-section'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-task'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-task-section'}, 'label', 'Description:', [descriptionInput])

    const priorityInput=createElement({class:'priority-input-task'}, 'input', '', [])
    const priorityInputSection=createElement({class:'priority-input-task-section'}, 'label', 'Priority:', [priorityInput])

    const dueDateInput=createElement({class:'due-date-input-task'}, 'input', '', [])
    const dueDateInputSection=createElement({class:'due-date-input-task-section'}, 'label', 'Due Date:', [dueDateInput])

    const submitButton=createElement({class:'task-submit-button'} ,'button', `task`)


    const taskForm=createElement({class:`task-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,priorityInputSection,dueDateInputSection,submitButton])

    formHeader.textContent = 'Edit form'

    submitButton.addEventListener('click' , /*Create task with DOM logic and storage*/)

    return taskForm

}

export {createEditTaskForm,createGenerateTaskForm}