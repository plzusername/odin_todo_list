import { content } from "../../../DOM/generate-content/generate-content-section";
import { switchBetweenSections } from "./sectionSwitching";

function viewProjects(){
    switchBetweenSections()

    if(window.projects){
        window.projects.forEach(project => {
            content.appendChild(project)
        });    
    }
}

export{viewProjects}