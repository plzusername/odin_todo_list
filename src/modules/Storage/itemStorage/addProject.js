import {Storage} from '../storage-utils/save-storage'
import { viewAll } from '../../Logic/view-all-projects'
import { projectGenerator } from '../../Logic/project-Generator'
import { content } from '../../DOM/generate-content/generate-content-section'
import { projectDomify } from '../../DOM/DOM-functions/generate-DOM-project'

function addProjet(){
    const generatedProject = new projectGenerator()

    Storage.projects.push(generatedProject)
    viewAll.addProject(generatedProject)

    content.appendChild(projectDomify(generatedProject))
}

export {addProjet}