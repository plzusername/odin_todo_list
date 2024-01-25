class notesGenerator{
    constructor(title, description){
        this.title=title
        this.description=description
    }

    editNote(newTitle, newDescription){
        this.title=newTitle
        this.description=newDescription
    }
}

export {notesGenerator}