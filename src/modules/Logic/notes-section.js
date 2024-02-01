import { trashSection } from "./trash-section"
import { notesGenerator } from "./notes-generator" 

class notesSection{
    static notes=[]

    static addItem(title, description){
        notesSection.notes.push(new notesGenerator(title, description))
    }

    static removeNote(note){
        notesSection.notes.splice(note.id,1)
        trashSection.addTrashedTask(note)
    }
}

export {notesSection}