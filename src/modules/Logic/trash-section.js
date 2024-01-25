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
        if (changeProject in task.prototype){
             task.parent_project.addTask(task.title, task.description, task.checked, task.priority, task.due_date)
             return null
        }
        notesSection.addNote(task)

    }

}

export {trashSection}