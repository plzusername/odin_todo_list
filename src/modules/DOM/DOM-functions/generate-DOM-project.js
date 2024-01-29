import { createElement } from "../utility/createElement";
import { createInputAdder } from "./create-input-adder";
import appendChildren from "../utility/add-Children-To-Element.js";

function projectDomify(project){
    const content=document.querySelector('.content-section')

    const projectName=createElement({class:'project-header'} ,'h1', project.title)

    const taskAdder=createInputAdder('Add task')

    const projectContainer=createElement({class:'project-container'}, 'div', '', [projectName,taskAdder])

    content.appendChild(projectContainer)

}

export{projectDomify}
