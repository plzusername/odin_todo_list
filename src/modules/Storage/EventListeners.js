import {addProjet} from './itemStorage/projectStorage/addProject'
import {showCreateTaskForm} from './itemStorage/taskStorage/showForm'
import {removeTaskfromPage} from './itemStorage/taskStorage/removeTask'
import { removeProjectFromPage } from './itemStorage/projectStorage/removeProject'
import { checkTask } from './itemStorage/taskStorage/checkTask'
import { showEditTaskForm } from './itemStorage/taskStorage/showEditTaskForm'
import { filterProject } from './itemStorage/accessibility/filterProject'
import { showNumberInput } from './itemStorage/accessibility/showDateInput'
import { viewProjects } from './itemStorage/accessibility/viewAllProjects'
import { switchToNotesSection } from './itemStorage/accessibility/notesSectionFilter'
import { switchBetweenSections } from './itemStorage/accessibility/sectionSwitching'
import { showNoteForm } from './itemStorage/noteStorage/showNoteForm'

document.addEventListener('DOMContentLoaded', ()=>{
    const addProjectButton = document.querySelector('.Add-project')
    const viewAllProjects = document.querySelector('.view-all-filter')
    const dateFilter = document.querySelector('.time-filter')
    const notesSection = document.querySelector('.notes-section')
    const sectionFilters = document.querySelectorAll('.filter-container:not(.project-filter):not(.time-filter)')

    addProjectButton.addEventListener('click', addProjet)
    sectionFilters.forEach(sectionFilter =>{
        sectionFilter.addEventListener('click',switchBetweenSections)
    })
    viewAllProjects.addEventListener('click',viewProjects)

    dateFilter.addEventListener('click', showNumberInput)

    notesSection.addEventListener('click', switchToNotesSection)
})

document.body.addEventListener('click',()=>{

    if (document.body.contains(document.querySelector('.Add-task'))){
        const addTaskButtons = document.querySelectorAll('.Add-task')
        const removeTaskButtons = document.querySelectorAll('.task-delete-icon')
        const removeProjectButtons = document.querySelectorAll('.delete-project-icon')
        const checkTaskButtons = document.querySelectorAll('.task-check')
        const editTaskButtons = document.querySelectorAll('.task-edit-icon')
        const filterProjects = document.querySelectorAll('.project-filter')

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
    
    }
    if(document.body.contains(document.querySelector('.Create-Note'))){
        const showNoteAdderForm = document.querySelector('.Create-Note')

        showNoteAdderForm.addEventListener('click', showNoteForm)

    }
  
})