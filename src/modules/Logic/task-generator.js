class taskGenerator{
    constructor(title, description, parent_project, checked, priority, due_date){
        const TITLE_DESCRIPTION_LENGTH=100

        this.title=title.slice(0,TITLE_DESCRIPTION_LENGTH)
        this.description=description.slice(0,TITLE_DESCRIPTION_LENGTH)
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

    check(){
        this.checked=!this.checked
    }


}

export {taskGenerator}