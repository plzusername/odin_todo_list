import { notesSection } from "./notes-section"

class notesGenerator{
    constructor(title, description){
        this.title=title
        this.description=description
        this.id = notesSection.notes.length
    }

    editNote(newTitle, newDescription){
        this.title=newTitle
        this.description=newDescription
    }
}

export {notesGenerator}