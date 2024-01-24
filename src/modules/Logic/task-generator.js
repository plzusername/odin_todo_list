class taskGenerator{
    constructor(title, description, parent_project, checked, priority, due_date){
        this.title=title
        this.description=description
        this.parent_project=parent_project
        this.checked=checked
        this.priority=priority
        this.due_date=due_date
        this.id = parent_project.tasks.length

    }

    taskEdit(newTitle, newDescription, newPriority, newDueDate){
        this.title=newTitle
        this.description=newDescription
        this.priority=newPriority
        this.due_date=newDueDate
    }

    changeProject(newParentProject){
        this.parent_project.removeTask(this.id,1)
        this.parent_project=newParentProject
        this.id=newParentProject.tasks.length
        newParentProject.addTask(this.title,this.description,this.checked,this.priority,this.due_date)
    }


}

export {taskGenerator}