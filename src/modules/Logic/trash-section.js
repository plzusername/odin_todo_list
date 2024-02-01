import { notesSection } from "./notes-section"

class trashSection{
    static trashedItems=[]

    static addTrashedTask(task){
        trashSection.trashedItems.push(task)
    }

    static removeFromTrash(task){
        trashSection.trashedItems.splice(task.id,1)
    }


    static restoreFromTrash(task){
        trashSection.removeFromTrash(task)
        if ('editNote' in Object.getPrototypeOf(task)){
            notesSection.addNote(task)
            return null
        }
        task.parent_project.addTask(task.title, task.description, task.checked, task.priority, task.due_date)

    }

}

export {trashSection}