import { viewAll } from '../../../Logic/view-all-projects'
import { Storage, saveStorage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'
import { viewProjects } from '../accessibility/viewAllProjects'
import { trashSection } from '../../../Logic/trash-section'

let removedProject

function addProjectToStorage(){
    Storage.projects = viewAll.projects
    Storage.trash = trashSection.trashedItems
    return Storage
}

function removeProjectFromPage(){
    const removeButton = event.target
    const removedProjectDOM = removeButton.closest('.project-container')
    const correspondinngFilter = document.querySelector(`.filter-container[data-id="${removedProjectDOM.dataset.id}"] `)

    removedProject = viewAll.projects[removedProjectDOM.dataset.id]

    viewAll.removeProject(removedProject)

    redoIds(viewAll.projects,undefined,true)
    
    trashSection.trashedItems.forEach(item =>{
        if(item.priority != undefined){
            if(item.parent_project.id > removedProject.id){
                item.parent_project.id -= 1
            }

        }
    })
    saveStorage(addProjectToStorage)

    removedProjectDOM.remove()

    const parent_projects = document.querySelectorAll('.project-container')
    redoIds(viewAll.projects, parent_projects)

    correspondinngFilter.remove()
    const allFilters = document.querySelectorAll('.project-filter')
    redoIds('none', allFilters)

    viewProjects()


}

export {removeProjectFromPage}