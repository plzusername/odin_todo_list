import {addProjet} from './itemStorage/addProject'
import {addTask} from './itemStorage/addTask'

document.addEventListener('DOMContentLoaded', ()=>{
    const addProjectButton = document.querySelector('.Add-project')

    addProjectButton.addEventListener('click', addProjet)
})

document.body.addEventListener('click',()=>{

    if (document.body.contains('.Add-task')){
        const addTaskButton = document.querySelector('.Add-task')

        addTaskButton.addEventListener('click', addTask)
    
    }
  
})