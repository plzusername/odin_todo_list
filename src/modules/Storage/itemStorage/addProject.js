import { viewAll } from '../../Logic/view-all-projects'
import { projectGenerator } from '../../Logic/project-Generator'
import { content } from '../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../DOM/DOM-functions/generate-DOM-project'

let generatedProject

function addProjectToStorage(){
    if (typeof Storage == 'string'){
        let parsedStorage = JSON.parse(Storage)
        
    }
    Storage.projects.push(generatedProject)

    return Storage
}

function addProjet(){
    const Storage=localStorage.getItem('Storage')
    const generatedProject = new projectGenerator()

    Storage.projects.push(generatedProject)
    viewAll.addProject(generatedProject)

    content.appendChild(projectDomify(generatedProject))

}

export {addProjet}