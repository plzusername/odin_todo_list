import { showEffect } from "../../../DOM/generate-content/generate-content-section"

function showNoteForm(){
    const noteForm = document.querySelector('.create-note-form')

    showEffect(noteForm)
}

export { showNoteForm }