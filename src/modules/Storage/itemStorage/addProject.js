import { viewAll } from '../../Logic/view-all-projects'
import { projectGenerator } from '../../Logic/project-Generator'
import { content } from '../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../DOM/DOM-functions/generate-DOM-project'
import { Storage, saveStorage } from '../storage-utils/save-storage'

let generatedProject

function addProjectToStorage(){
    if (typeof Storage == 'string'){
        let parsedStorage = JSON.parse(Storage)
        parsedStorage.projects = viewAll.projects
        return parsedStorage
    }
    Storage.projects = viewAll.projects
    return Storage
}

function addProjet(){
    generatedProject = new projectGenerator()

    viewAll.addProject(generatedProject)

    saveStorage(addProjectToStorage)

    content.appendChild(projectDomify(generatedProject))

}

export {addProjet}