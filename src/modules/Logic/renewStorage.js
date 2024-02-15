import { Storage } from "../Storage/storage-utils/save-storage";
import { projectGenerator } from '../Logic/project-Generator'

function renewStorage(){
    const renewedStorage = {
        projects:[],
        trash:[],
        calendar:{},
        tempDateFilter:[],
        notes:[]
    }

    Storage.projects.forEach(project => {
        const generatedProject = new projectGenerator(project.title)

       renewStorage.projects.push(generatedProject)
       generatedProject.tasks.forEach(task =>{
        generatedProject.addTask(task)
       })
    });

    return renewedStorage
}

export { renewStorage }