import { createElement } from "../utility/createElement";
import { createInputAdder } from "./create-input-adder";
import { viewAll } from '../../Logic/view-all-projects'

function projectDomify(project){
    const content=document.querySelector('.content-section')

    const projectName=createElement({class:'project-header'} ,'h1', project.title)

    const taskAdder=createInputAdder('Add task')

    const projectContainer=createElement({class:'project-container'}, 'div', '', [projectName,taskAdder])

    content.appendChild(projectContainer)

    viewAll.addProject(project)

}

export{projectDomify}
