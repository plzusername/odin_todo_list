import {viewAll} from './view-all-projects.js'
import { trashSection } from './trash-section.js'
import { redoIds } from './redoIds.js'

class projectGenerator{
    constructor(title = `Project #${viewAll.projects.length + 1}`){
        this.title=title
        this.tasks=[]

    }

    addTask(task){
        task.id = this.tasks.length
        task.parent_project = {id:this.id}
        this.tasks.push(task)
    }

    removeTask(task){
        this.tasks.splice(task.id,1)
        trashSection.addTrashedTask(task)
        redoIds(this.tasks)
    }

    changeProject(newProjectDestination, taskToBeMoved, taskNewPosition){
        this.removeTask(taskToBeMoved)
        newProjectDestination.tasks.splice(taskNewPosition, 0, taskToBeMoved)
    }

}

export {projectGenerator}