class taskGenerator{
    constructor(title, description, parent_project, checked, priority, due_date){
        this.title=title
        this.description=description
        this.parent_project=parent_project
        this.checked=checked
        this.priority=priority
        this.due_date=due_date

    }

    taskEdit(newTitle, newDescription, newPriority, newDueDate){
        this.title=newTitle
        this.description=newDescription
        this.priority=newPriority
        this.due_date=newDueDate
    }

    ediParentProject(newParentProject){
        this.parent_project=newParentProject
    }


}

export {taskGenerator}