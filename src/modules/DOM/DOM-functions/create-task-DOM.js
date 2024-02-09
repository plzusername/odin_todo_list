import { createElement } from "../utility/createElement";

function createTask(task){
    const titleText=document.createTextNode(task.title)
    const descriptionText=document.createTextNode(task.description)

    const check=createElement({class:'task-check', type:'checkbox'}, 'input', '', [])
    // check.addEventListener('click',()=>{
    //     const checkBox = event.target
    //     const parentTask = checkBox.closest('.task-container')

    //     if(checkBox.checked == true){
    //         parentTask.classList.add('checked')
    //     }
    //     else{
    //         parentTask.classList.remove('checked')
    //     }
    // })
    const taskTitle=createElement({class:'task-title'}, 'p', '', [titleText])
    const taskDescription=createElement({class:'task-description'}, 'p',  '', [descriptionText])
    const taskDateInput=createElement({class:'task-date-input', type:'date', value:task.due_date}, 'input',  '', [])
    taskDateInput.disabled=true
    const taskDelete=createElement({class:'task-delete-icon fa-solid fa-trash-can'}, 'i',  '', [])
    const taskEdit=createElement({class:'task-edit-icon fa-regular fa-pen-to-square'}, 'i',  '', [])

    const taskText=createElement({class:'task-text-container'}, 'div', '', [taskTitle, taskDescription])

    const leftSide=createElement({class:'task-left-side'}, 'div', '', [check, taskText])
    const rightSide=createElement({class:'task-right-side'}, 'div', '', [taskDateInput, taskDelete, taskEdit])

    const taskContainer=createElement({class:'task-container'}, 'div', '', [leftSide,rightSide])

    taskContainer.dataset.id = task.id
    taskDateInput.dataset.id = task.id
    taskEdit.dataset.id = task.id
    taskDelete.dataset.id = task.id
    taskContainer.dataset.priority = task.priority

    return taskContainer

}

export {createTask}