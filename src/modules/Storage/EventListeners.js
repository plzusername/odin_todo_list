import {addProjet} from './itemStorage/addProject'
import {addTask} from './itemStorage/addTask'

document.addEventListener('DOMContentLoaded', ()=>{
    const addProjectButton = document.querySelector('.Add-project')

    addProjectButton.addEventListener('click', addProjet)
})

document.body.addEventListener('click',()=>{
    const addTaskButton = document.querySelector('.Add-task')

    addTaskButton.addEventListener('click', addProjet)
  
})