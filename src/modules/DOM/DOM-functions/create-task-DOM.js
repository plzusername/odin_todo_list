import { createElement } from "../utility/createElement";

function createTask(task){

    const check=createElement({class:'task-check', type:'checkbox', id:`${task.parent_project.tasks.length} ${task.parent_project.id}`}, 'input', '', [])
    const taskTitle=createElement({class:'task-title', for:`${task.parent_project.tasks.length} ${task.parent_project.id}`}, 'p', '', [])
    const taskDescription=createElement({class:'task-description'}, 'p',  '', [])
    const taskDateInput=createElement({class:'task-date-input', type:'date'}, 'input',  '', [])
    const taskDelete=createElement({class:'task-delete-icon, fa-solid fa-trash-can'}, 'i',  '', [])
    const taskEdit=createElement({class:'task-edit-icon fa-regular fa-pen-to-square'}, 'i',  '', [])

    const taskContainer=createElement({class:'task-container'}, 'div', '', [check,taskTitle,taskDescription,taskDateInput,taskDelete,taskEdit])

    return taskContainer

}

export {createTask}