import { notesSection } from '../../../Logic/notes-section' 
import { saveStorage, Storage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'

let removedNote

function addProjectToStorage(){
    Storage.notes.splice(event.target.closest('.note-container').dataset.id,1)
    return Storage
}

function removeNote(){

    const removeButton = event.target

    removedNote = notesSection.notes[removeButton.closest('.note-container').dataset.id]

    notesSection.removeNote(removedNote)

    saveStorage(addProjectToStorage)

    removeButton.closest('.note-container').remove()

    const DOM_notes = document.querySelectorAll('.note-container')

    redoIds(notesSection.notes, DOM_notes)

}

export {removeNote}