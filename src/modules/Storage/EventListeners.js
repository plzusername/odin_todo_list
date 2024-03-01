import {addProjet} from './itemStorage/projectStorage/addProject'
import {showCreateTaskForm} from './itemStorage/taskStorage/showForm'
import {removeTaskfromPage} from './itemStorage/taskStorage/removeTask'
import { removeProjectFromPage } from './itemStorage/projectStorage/removeProject'
import { checkTask } from './itemStorage/taskStorage/checkTask'
import { showEditTaskForm } from './itemStorage/taskStorage/showEditTaskForm'
import { filterProject } from './itemStorage/accessibility/filterProject'
import { showNumberInput } from './itemStorage/accessibility/showDateInput'
import { viewProjects } from './itemStorage/accessibility/viewAllProjects'

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
        const editTaskButtons = document.querySelectorAll('.task-edit-icon')
        const filterProjects = document.querySelectorAll('.project-filter')
        const viewAllProjects = document.querySelector('.view-all-filter')
        const dateFilter = document.querySelector('.time-filter')

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
        editTaskButtons.forEach(editTaskButton =>{
            editTaskButton.addEventListener('click',showEditTaskForm)
        })
        filterProjects.forEach(projectFIlter =>{
            projectFIlter.addEventListener('click', filterProject)
        })
        viewAllProjects.addEventListener('click', viewProjects)

        dateFilter.addEventListener('click', showNumberInput)
    
    }
  
})