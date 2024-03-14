import { viewAll } from "../../Logic/view-all-projects"
import { notesSection } from "../../Logic/notes-section"
import { regeneratePrototype } from '../../Logic/regeneratePrototype'
import { trashSection } from "../../Logic/trash-section"

function populateArrays(){
    const regeneratedStorage = regeneratePrototype()
    regeneratedStorage.notes.forEach(note => {
        notesSection.addItem(note)
    });

    regeneratedStorage.projects.forEach(project => {
        viewAll.addProject(project)
        project.tasks.forEach(task =>{
            task.parent_project = {id:project.id}
        })
    });
    regeneratedStorage.trash.forEach(trashedItem => {
        trashSection.addTrashedTask(trashedItem)
    });
}

export{populateArrays}