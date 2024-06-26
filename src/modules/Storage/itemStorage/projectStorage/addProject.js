import { viewAll } from '../../../Logic/view-all-projects'
import { projectGenerator } from '../../../Logic/project-Generator'
import { content } from '../../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../../DOM/DOM-functions/generate-DOM-project'
import { Storage, saveStorage } from '../../storage-utils/save-storage'
import { generateFilter } from '../../../DOM/DOM-functions/generate-filter'
import { viewProjects } from '../accessibility/viewAllProjects'

let generatedProject


function addProjectToStorage(){
    Storage.projects = viewAll.projects
    return Storage
}

function addProjet(){
    const projectInput = document.querySelector('.add-project-input')

    const projectTitle = projectInput.value || undefined

    generatedProject = new projectGenerator(projectTitle)

    projectInput.value = ''

    viewAll.addProject(generatedProject)

    saveStorage(addProjectToStorage)

    const DOMproject = projectDomify(generatedProject)

    const projectFilter = generateFilter(generatedProject.title, 'project-filter')
    projectFilter.dataset.id = generatedProject.id
    const sideBarProjects = document.querySelector('.sideBar-projects-section')
    sideBarProjects.appendChild(projectFilter)

    content.appendChild(DOMproject)

    viewProjects()

}

export {addProjet}