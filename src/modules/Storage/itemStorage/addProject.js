import { viewAll } from '../../Logic/view-all-projects'
import { projectGenerator } from '../../Logic/project-Generator'
import { content } from '../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../DOM/DOM-functions/generate-DOM-project'
import { Storage, saveStorage } from '../storage-utils/save-storage'

let generatedProject

const CircularJSON = require('circular-json')


function addProjectToStorage(){
    if (typeof Storage == 'string'){
        let parsedStorage = CircularJSON.parse(Storage)
        parsedStorage.projects = CircularJSON.parse(localStorage.getItem('ViewAllHelper'))
        return parsedStorage
    }
    Storage.projects = CircularJSON.parse(localStorage.getItem('ViewAllHelper'))
    return Storage
}

function addProjet(){
    generatedProject = new projectGenerator()

    viewAll.addProject(generatedProject)

    let viewAllStorage = CircularJSON.parse(localStorage.getItem('ViewAllHelper')) || [];
    viewAllStorage.push(generatedProject);
    localStorage.setItem('ViewAllHelper', CircularJSON.stringify(viewAllStorage));

    saveStorage(addProjectToStorage)

    content.appendChild(projectDomify(generatedProject))

}

export {addProjet}