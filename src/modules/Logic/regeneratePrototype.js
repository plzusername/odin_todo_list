import { Storage } from "../Storage/storage-utils/save-storage"
import { notesGenerator } from "./notes-generator";
import { projectGenerator } from "./project-Generator";
import { taskGenerator } from "./task-generator";
import { trashSection } from "./trash-section";

function regeneratePrototype(){
    console.log('Storage')
    const restoredStorage = {
        projects: [],
        trash: [],
        tempDateFiltered: [],
        notes: [],
        calendar: {}
    }

    Storage.notes.forEach(note => {
        restoredStorage.notes.push(new notesGenerator(note.title, note.description))
    });
    Storage.projects.forEach(project =>{
        const newProject = new projectGenerator(project.title)
        project.tasks.forEach(task => {
            const generatedTask = new taskGenerator(task.title, task.description, task.parent_project, task.checked, task.priority, task.due_date)
            newProject.addTask(generatedTask)
        });
        restoredStorage.projects.push(newProject)

    })
    

    return restoredStorage

}

export {regeneratePrototype}