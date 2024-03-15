import { viewAll } from "../../../Logic/view-all-projects"
import { Storage, saveStorage } from "../../storage-utils/save-storage"

function changeTaskProject(){
    Storage.projects = viewAll.projects
    return Storage
}

function MoveItem(evt){
    const taskNewPosition = evt.newIndex
    const taskOldPosition = evt.oldIndex
    const parentProject = viewAll.projects[evt.from.closest('.project-container').dataset.id]
    const newParentProject = viewAll.projects[evt.to.closest('.project-container').dataset.id]
    const taskToBeMoved = parentProject.tasks[taskOldPosition]

    parentProject.changeProject(newParentProject, taskToBeMoved, taskNewPosition)    

    saveStorage(changeTaskProject)

}
export {MoveItem}