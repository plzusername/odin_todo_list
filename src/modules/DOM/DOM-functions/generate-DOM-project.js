import { createElement } from "../utility/createElement";
import { createInputAdder } from "./create-input-adder";
import { viewAll } from '../../Logic/view-all-projects'

function projectDomify(project){

    const projectName=createElement({class:'project-header'} ,'h1', project.title, [])

    const taskAdder=createInputAdder('Add task')

    const add_icon = taskAdder["add_icon"]

    add_icon.dataset.id =project.id

    const projectContainer=createElement({class:'project-container'}, 'div', '', [projectName, taskAdder['inputAdderSection']])
    
    projectContainer.dataset.id=project.id

    return projectContainer

}

export{projectDomify}
