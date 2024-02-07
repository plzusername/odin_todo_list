import {addProjet} from './itemStorage/addProject'
import {showCreateTaskForm} from './itemStorage/showForm'

document.addEventListener('DOMContentLoaded', ()=>{
    const addProjectButton = document.querySelector('.Add-project')

    addProjectButton.addEventListener('click', addProjet)
})

document.body.addEventListener('click',()=>{

    if (document.body.contains(document.querySelector('.Add-task'))){
        const addTaskButtons = document.querySelectorAll('.Add-task')

        addTaskButtons.forEach(addTaskButton => {
            addTaskButton.addEventListener('click',showCreateTaskForm)
        })
    
    }
  
})