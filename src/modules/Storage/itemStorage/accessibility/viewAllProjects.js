import { switchBetweenSections } from "./sectionSwitching";
import { domifyStorageProjects } from "../projectStorage/domifyProjectStorage";

function viewProjects(){
    switchBetweenSections()
    domifyStorageProjects()
}

export{viewProjects}