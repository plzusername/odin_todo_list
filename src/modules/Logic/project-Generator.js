import {viewAll} from './view-all-projects.js'

class projectGenerator{
    constructor(title = `Project #${viewAll.projects.length + 1}`){
        this.title=title
        this.tasks=[]
        viewAll.projects.push(this)
        this.id=viewAll.projects.length - 1

    }
    
    remove(){
        this.tasks=[]
        viewAll.projects.splice(this.id,1)
    }

    addTask(task){
        this.tasks.push(task)
    }

}

export {projectGenerator}