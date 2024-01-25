import { trashSection } from "./trash-section"

class notesSection{
    static notes=[]

    static addNote(note){
        notesSection.notes.push(note)
    }

    static removeNote(note){
        notesSection.notes.splice(note.id,1)
        trashSection.addTrashedTask(note)
    }
}

export {notesSection}