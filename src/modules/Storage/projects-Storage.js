import { viewAll } from '../Logic/view-all-projects'
import { projectDomify } from '../DOM/DOM-functions/generate-DOM-project'
import { projectGenerator } from '../Logic/project-Generator'
import { Storage } from './main-Storage'
import { content } from '../DOM/generate-content/generate-content-section'

function StoreAddedProject(){
    const projectTitle = '' || undefined
    const generatedProject = new projectGenerator(projectTitle)
    viewAll.addProject( generatedProject )
    Storage.projects.push(generatedProject)
    content.appendChild(projectDomify(generatedProject))
}

export{StoreAddedProject}