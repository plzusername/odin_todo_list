import {viewAll} from './view-all-projects.js'
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

    addTask(task){
        this.tasks.push(task)
        task.id = this.tasks.length
        task.parent_project = {id:this.id}
    }

    removeTask(task){
        this.tasks.splice(task.id,1)
        trashSection.addTrashedTask(this.tasks[index])
        viewAll.projects=filterEmptyProjects(viewAll.projects)
    }

    changeProject(newProjectDestination, taskToBeMoved){
        this.removeTask(taskToBeMoved)
        newProjectDestination.addTask(taskToBeMoved)
    }

}

export {projectGenerator}