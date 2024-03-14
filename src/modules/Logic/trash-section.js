import { notesSection } from "./notes-section"
import { redoIds } from "./redoIds"
import { viewAll } from "./view-all-projects"

class trashSection{
    static trashedItems=[]

    static addTrashedTask(task){
        trashSection.trashedItems.push(task)
    }

    static removeFromTrash(task){
        trashSection.trashedItems.splice(task.id,1)
        redoIds(trashSection.trashedItems)
    }


    static restoreItem(task){
        
        trashSection.removeFromTrash(task)
        if ('editNote' in Object.getPrototypeOf(task)){
            notesSection.addItem(task)
            return null
        }
        const parent_project = viewAll.projects[task.parent_project.id]
        parent_project.addTask(task)

    }

}

export {trashSection}