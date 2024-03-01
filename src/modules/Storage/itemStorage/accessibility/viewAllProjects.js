import { content } from "../../../DOM/generate-content/generate-content-section";
import { switchBetweenSections } from "./sectionSwitching";

function viewProjects(){

    switchBetweenSections()

    window.projects.forEach(project => {
        content.appendChild(project)
    });
}

export{viewProjects}