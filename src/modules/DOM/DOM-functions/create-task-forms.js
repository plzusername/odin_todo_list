import { createElement } from "../utility/createElement"
import { viewAll } from '../../Logic/view-all-projects'
import { taskGenerator } from '../../Logic/task-generator'
import { content, taskForm } from '../../DOM/generate-content/generate-content-section'
import { createTask } from '../../DOM/DOM-functions/create-task-DOM'
import { Storage, saveStorage } from '../../Storage/storage-utils/save-storage'

let generatedTask

const CircularJSON = require('circular-json')

function addTaskToProjectStorage(){
    if (typeof Storage == 'string'){
        let parsedStorage = CircularJSON.parse(Storage)
        parsedStorage.projects[window.currentTaskForm].tasks.push(generatedTask)
        return parsedStorage
    }
    Storage.projects[window.currentTaskForm].tasks.push(generatedTask)
    return Storage
}


function createGenerateTaskForm(){
    const formHeader=createElement({class:'task-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-task'}, 'input', '', [])
    titleInput.required=true
    const titleInputSection=createElement({class:'title-input-task-section'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-task'}, 'input', '', [])
    descriptionInput.required=true
    const descriptionInputSection=createElement({class:'description-input-task-section'}, 'label', 'Description:', [descriptionInput])

    const priorityInput=createElement({class:'priority-input-task' }, 'input', '', [])
    priorityInput.required=true
    const priorityInputSection=createElement({class:'priority-input-task-section'}, 'label', 'Priority:', [priorityInput])

    const dueDateInput=createElement({class:'due-date-input-task', type:'date'}, 'input', '', [])
    dueDateInput.required=true
    const dueDateInputSection=createElement({class:'due-date-input-task-section'}, 'label', 'Due Date:', [dueDateInput])

    const submitButton=createElement({class:'task-submit-button', type:'submit'} ,'button', `task`)


    const taskForm=createElement({class:`create-task-form`}, 'form', '', [formHeader,titleInputSection,descriptionInputSection,priorityInputSection,dueDateInputSection,submitButton])
    
    formHeader.textContent = 'Create form'

    taskForm.addEventListener('submit',()=>{
        const parentProject = document.querySelector(`.project-container[data-id="${window.currentTaskForm}"]`)

        generatedTask = new taskGenerator(titleInput.value , descriptionInput.value , viewAll.projects[window.currentTaskForm], false ,  priorityInput.value , dueDateInput.value, )

        viewAll.addProject(generatedTask)

        saveStorage(addTaskToProjectStorage)

        parentProject.appendChild(createTask(generatedTask))

        taskForm.classList.remove('visible')

        event.preventDefault()
    })

    submitButton.addEventListener('click' , ()=>{
        // const parentProject = document.querySelector(`.project-container[data-id="${window.currentTaskForm}"]`)

        // generatedTask = new taskGenerator(titleInput.value , descriptionInput.value , viewAll.projects[window.currentTaskForm], false ,  priorityInput.value , dueDateInput.value, )

        // viewAll.addProject(generatedTask)

        // saveStorage(addTaskToProjectStorage)

        // parentProject.appendChild(createTask(generatedTask))

        // taskForm.classList.remove('visible')
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

    const submitButton=createElement({class:'task-submit-button'} ,'button', `task`)


    const taskForm=createElement({class:`edit-task-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,priorityInputSection,dueDateInputSection,submitButton])

    formHeader.textContent = 'Edit form'

    submitButton.addEventListener('click' , ()=>{})

    return taskForm

}

export {createEditTaskForm,createGenerateTaskForm}