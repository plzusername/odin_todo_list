import { viewAll } from "../../Logic/view-all-projects"
import { notesSection } from "../../Logic/notes-section"
import { regeneratePrototype } from '../../Logic/regeneratePrototype'

function populateArrays(){
    const regeneratedStorage = regeneratePrototype()
    regeneratedStorage.notes.forEach(note => {
        notesSection.addItem(note)
    });

    regeneratedStorage.projects.forEach(project => {
        viewAll.addProject(project)
    });
}

export{populateArrays}