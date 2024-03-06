import { Storage } from "../Storage/storage-utils/save-storage"
import { notesGenerator } from "./notes-generator";
import { notesSection } from "./notes-section";
import { projectGenerator } from "./project-Generator";
import { taskGenerator } from "./task-generator";
import { trashSection } from "./trash-section";

function regeneratePrototype(){
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
    Array.prototype.addItem = function(title, description){
        notesSection.notes.push(new notesGenerator(title, description))
    }
    Array.prototype.removeNote = function(note){
        notesSection.notes.splice(note.id,1)
        trashSection.addTrashedTask(note)    
    }


    return restoredStorage

}

export {regeneratePrototype}