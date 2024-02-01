import { viewAll } from '../Logic/view-all-projects'
import { projectDomify } from '../DOM/DOM-functions/generate-DOM-project'
import { projectGenerator } from '../Logic/project-Generator'
import { saveDataStorage } from './storage-utils/save-storage'
import { Storage } from './main-Storage'
import { content } from '../DOM/generate-content/generate-content-section'

function StoreAddedProject(){
    const generatedProject = new projectGenerator('' || undefined)
    viewAll.addProject( generatedProject )
    Storage.projects.push(generatedProject)
    content.appendChild(projectDomify(generatedProject))
}

export{StoreAddedProject}