import { viewAll } from '../../../Logic/view-all-projects'
import { Storage, saveStorage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'
import { viewProjects } from '../accessibility/viewAllProjects'
import { content } from '../../../DOM/generate-content/generate-content-section'

let removedProject

function addProjectToStorage(){
    Storage.projects.splice(removedProject.id, 1)
    redoIds(Storage.projects)
    return Storage
}

function removeProjectFromPage(){

    const removeButton = event.target

    const removedProjectDOM = removeButton.closest('.project-container')

    const correspondinngFilter = document.querySelector(`.filter-container[data-id="${removedProjectDOM.dataset.id}"] `)

    removedProject = viewAll.projects[removedProjectDOM.dataset.id]

    viewAll.removeProject(removedProject)

    saveStorage(addProjectToStorage)

    window.projects.forEach(project => {
        content.appendChild(project)
    });

    removedProjectDOM.remove()

    window.projects = Array.from(document.querySelector('.content-section').querySelectorAll('.project-container')) 
    
    // viewProjects()


    const parent_projects_tasks = document.querySelectorAll('.project-container')

    redoIds(viewAll.projects, parent_projects_tasks)

    correspondinngFilter.remove()

    const allFilters = document.querySelectorAll('.project-filter')

    redoIds('none', allFilters)


}

export {removeProjectFromPage}