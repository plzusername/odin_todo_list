import { notesSection } from '../../../Logic/notes-section' 
import { saveStorage, Storage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'

let removedNote

function addProjectToStorage(){
    Storage.notes = notesSection.notes
    return Storage
}

function removeNote(){

    const removeButton = event.target
    removedNote = notesSection.notes[removeButton.closest('.note-container').dataset.id]

    removeButton.closest('.note-container').remove()

    const DOM_notes = document.querySelectorAll('.note-container')

    notesSection.removeNote(removedNote)

    redoIds(notesSection.notes, DOM_notes)

    saveStorage(addProjectToStorage)

}

export {removeNote}