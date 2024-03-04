import { trashSection } from "./trash-section"
import { notesGenerator } from "./notes-generator" 

class notesSection{
    static notes=[]

    static addItem(note){
        notesSection.notes.push(note)
    }
    
    static removeNote(note){
        notesSection.notes.splice(note.id,1)
        trashSection.addTrashedTask(note)
    }

}

export {notesSection}