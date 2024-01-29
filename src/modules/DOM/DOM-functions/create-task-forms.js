import { createElement } from "../utility/createElement";

function createTaskForm(mode){
    const formHeader=createElement({class:'task-form-header'}, 'h1', `${mode} task`, [])

    const titleInput=createElement({class:'title-input-task'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-task-section'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-task'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-task-section'}, 'label', 'Description:', [descriptionInput])

    const priorityInput=createElement({class:'priority-input-task'}, 'input', '', [])
    const priorityInputSection=createElement({class:'priority-input-task-section'}, 'label', 'Priority:', [priorityInput])

    const dueDateInput=createElement({class:'due-date-input-task'}, 'input', '', [])
    const dueDateInputSection=createElement({class:'due-date-input-task-section'}, 'label', 'Due Date:', [dueDateInput])

    const submitButton=createElement({class:'task-submit-button'} ,'button', `${mode} task`)


    const taskForm=createElement({class:`task-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,priorityInputSection,dueDateInputSection,submitButton])

    return taskForm
}

export {createTaskForm}