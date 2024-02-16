import {addProjet} from './itemStorage/addProject'
import {showCreateTaskForm} from './itemStorage/showForm'
import {removeTaskfromPage} from './itemStorage/removeTask'
import { removeProjectFromPage } from './itemStorage/removeProject'
import { checkTask } from './itemStorage/checkTask'

document.addEventListener('DOMContentLoaded', ()=>{
    const addProjectButton = document.querySelector('.Add-project')

    addProjectButton.addEventListener('click', addProjet)
})

document.body.addEventListener('click',()=>{

    if (document.body.contains(document.querySelector('.Add-task'))){
        const addTaskButtons = document.querySelectorAll('.Add-task')
        const removeTaskButtons = document.querySelectorAll('.task-delete-icon')
        const removeProjectButtons = document.querySelectorAll('.delete-project-icon')
        const checkTaskButtons = document.querySelectorAll('.task-check')

        addTaskButtons.forEach(addTaskButton => {
            addTaskButton.addEventListener('click',showCreateTaskForm)
        })
        removeTaskButtons.forEach(removeTaskButton =>{
            removeTaskButton.addEventListener('click',removeTaskfromPage)
        })
        removeProjectButtons.forEach(removeProjectButton =>{
            removeProjectButton.addEventListener('click',removeProjectFromPage)
        })
        checkTaskButtons.forEach(checkTaskButton =>{
            checkTaskButton.addEventListener('change',checkTask)
        })
    
    }
  
})