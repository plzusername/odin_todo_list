import {addProjet} from './itemStorage/addProject'
import {showCreateTaskForm} from './itemStorage/showForm'
import {removeTaskfromPage} from './itemStorage/removeTask'

document.addEventListener('DOMContentLoaded', ()=>{
    const addProjectButton = document.querySelector('.Add-project')

    addProjectButton.addEventListener('click', addProjet)
})

document.body.addEventListener('click',()=>{

    if (document.body.contains(document.querySelector('.Add-task'))){
        const addTaskButtons = document.querySelectorAll('.Add-task')
        const removeTaskButtons = document.querySelectorAll('.task-delete-icon')

        addTaskButtons.forEach(addTaskButton => {
            addTaskButton.addEventListener('click',showCreateTaskForm)
        })
        removeTaskButtons.forEach(removeTaskButton =>{
            removeTaskButton.addEventListener('click',removeTaskfromPage)
        })
    
    }
  
})