import { createElement } from "../utility/createElement";
import { createInputAdder } from "./create-input-adder";
import { viewAll } from '../../Logic/view-all-projects'

function projectDomify(project){

    const projectName=createElement({class:'project-header'} ,'h1', project.title, [])

    const taskAdder=createInputAdder('Add task')

    const addTaskText = createElement({class:'add-task-text'}, 'p', 'Add task', [])
    const add_icon = taskAdder["add_icon"]

    const addTaskContainer = createElement({class:'add-task-container'}, 'div', '', [addTaskText,add_icon])

    add_icon.dataset.id =project.id

    const projectContainer=createElement({class:'project-container'}, 'div', '', [projectName, addTaskContainer])
    
    projectContainer.dataset.id=project.id

    return projectContainer

}

export{projectDomify}
