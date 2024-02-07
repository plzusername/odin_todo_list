import { viewAll } from '../../Logic/view-all-projects'
import { projectGenerator } from '../../Logic/project-Generator'
import { content } from '../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../DOM/DOM-functions/generate-DOM-project'
import { Storage, saveStorage } from '../storage-utils/save-storage'

let generatedProject

function addProjectToStorage(){
    if (typeof Storage == 'string'){
        let parsedStorage = JSON.parse(Storage)
        
    }
    Storage.projects.push(generatedProject)

    return Storage
}

function addProjet(){
    generatedProject = new projectGenerator()

    viewAll.addProject(generatedProject)

    content.appendChild(projectDomify(generatedProject))

    saveStorage(addProjectToStorage)

    console.log(localStorage.getItem('Storage'))

}

export {addProjet}