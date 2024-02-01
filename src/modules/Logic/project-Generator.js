import {viewAll} from './view-all-projects.js'
import { taskGenerator } from './task-generator.js'
import { trashSection } from './trash-section.js'
import { filterEmptyProjects } from './remove-empty-project.js'

class projectGenerator{
    constructor(title = `Project #${viewAll.projects.length + 1}`){
        this.title=title
        this.tasks=[]
        this.id=viewAll.projects.length 

    }
    
    remove(){
        viewAll.projects.splice(this.id,1)
    }

    addTask(taskTitle, taskDescription, taskIsChecked, taskPriority, taskDueDate){
        this.tasks.push(new taskGenerator(taskTitle, taskDescription, this, taskIsChecked, taskPriority, taskDueDate))
        
    }

    removeTask(index){
        this.tasks.splice(index,1)
        trashSection.addTrashedTask(this.tasks[index])
        viewAll.projects=filterEmptyProjects(viewAll.projects)
    }

}

export {projectGenerator}