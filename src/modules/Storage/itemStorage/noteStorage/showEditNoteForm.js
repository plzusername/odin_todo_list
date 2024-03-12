import { showEffect } from "../../../DOM/generate-content/generate-content-section"

function showEditNoteForm(){
    const noteFormElement = document.querySelector('.edit-note-form')

    window.noteToBeEditedIndex = event.target.closest('.note-container').dataset.id

    const titleInput = noteFormElement.querySelector('.edit-note-form .title-input-note')
    const descriptionInput = noteFormElement.querySelector('.edit-note-form .description-input-note')

    const noteToBeEdited = event.target.closest('.note-container')

    const noteTitle = noteToBeEdited.querySelector('.note-title').innerText
    const noteDescription = noteToBeEdited.querySelector('.note-description').innerText

    titleInput.value = noteTitle
    descriptionInput.value = noteDescription

    showEffect(noteFormElement)
}

export {showEditNoteForm}

