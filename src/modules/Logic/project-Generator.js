import {viewAll} from './view-all-projects.js'

class projectGenerator{
    constructor(title = 'Project Title'){
        this.title=title
        this.tasks=[]
        viewAll.projects.append(this)

    }
    
    remove(){
        this.tasks=[]
        viewAll.projects.splice(this.id,1)
    }

}

export {projectGenerator}