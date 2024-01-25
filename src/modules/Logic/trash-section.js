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
        task.parent_project.addTask(task.title, task.description, task.checked, task.priority, task.due_date)
    }

}

export {trashSection}