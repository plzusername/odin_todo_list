import { createElement } from "../utility/createElement"
import { viewAll } from '../../Logic/view-all-projects'
import { taskGenerator } from '../../Logic/task-generator'
import { createTask } from '../../DOM/DOM-functions/create-task-DOM'
import { Storage, saveStorage } from "../../Storage/storage-utils/save-storage"

let generatedTask

function addTaskToProjectStorage(){
    return Storage    
}


function createGenerateTaskForm(){
    const formHeader=createElement({class:'task-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-task-create'}, 'input', '', [])
    titleInput.required=true
    const titleInputSection=createElement({class:'title-input-task-section'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-task-create'}, 'input', '', [])
    descriptionInput.required=true
    const descriptionInputSection=createElement({class:'description-input-task-section'}, 'label', 'Description:', [descriptionInput])

    const priorityInput=createElement({class:'priority-input-task-create' }, 'select', '', [])

    const options = ['Low', 'Medium', 'High']
    options.forEach(option =>{
        const optionInput = createElement({class:option}, 'option', option)
        priorityInput.appendChild(optionInput)
    })

    priorityInput.required=true


    const priorityInputSection=createElement({class:'priority-input-task-section'}, 'label', 'Priority:', [priorityInput])

    const dueDateInput=createElement({class:'due-date-input-task-create', type:'date'}, 'input', '', [])
    dueDateInput.required=true
    const dueDateInputSection=createElement({class:'due-date-input-task-section'}, 'label', 'Due Date:', [dueDateInput])

    const submitButton=createElement({class:'task-create-submit-button', type:'submit'} ,'button', `Create Task`)


    const taskForm=createElement({class:`create-task-form`}, 'form', '', [formHeader,titleInputSection,descriptionInputSection,priorityInputSection,dueDateInputSection,submitButton])
    
    formHeader.textContent = 'Create Task'

    taskForm.addEventListener('submit',()=>{

        const parentProject = document.querySelector(`.project-container[data-id="${window.currentTaskForm}"]`)

        generatedTask = new taskGenerator(titleInput.value , descriptionInput.value , {}, false ,  priorityInput.value , dueDateInput.value, )

        const parentProjectObject = viewAll.projects[window.currentTaskForm]

        parentProjectObject.addTask(generatedTask)

        saveStorage(addTaskToProjectStorage)

        titleInput.value = ''
        descriptionInput.value = ''
        dueDateInput.value = null

        parentProject.appendChild(createTask(generatedTask))

        taskForm.classList.remove('visible')

        event.preventDefault()
    })

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

    const submitButton=createElement({class:'task-edit-submit-button', type:'submit'} ,'button', `task`)


    const taskForm=createElement({class:`edit-task-form`}, 'form', '', [formHeader,titleInputSection,descriptionInputSection,priorityInputSection,dueDateInputSection,submitButton])

    formHeader.textContent = 'Edit form'

    submitButton.addEventListener('click' , ()=>{})

    return taskForm

}

export {createEditTaskForm,createGenerateTaskForm}