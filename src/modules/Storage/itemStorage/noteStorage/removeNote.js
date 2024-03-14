import { notesSection } from '../../../Logic/notes-section' 
import { saveStorage, Storage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'
import { trashSection } from '../../../Logic/trash-section'
import { repurposeIcons } from '../../../DOM/DOM-functions/createTrashSection' 

let removedNote

function addProjectToStorage(){
    Storage.notes = notesSection.notes
    Storage.trash = trashSection.trashedItems
    return Storage
}

function removeNote(){
    const DOMtrashSection = document.querySelector('.trash-section > .trash-items-container')
    const removeButton = event.target
    const DOMremovedNote = removeButton.closest('.note-container')

    const clonedNote = DOMremovedNote.cloneNode(true)

    const trashedNote = repurposeIcons(clonedNote)

    removedNote = notesSection.notes[DOMremovedNote.dataset.id]

    notesSection.removeNote(removedNote)

    DOMtrashSection.appendChild(trashedNote)

    redoIds(trashSection.trashedItems, document.querySelectorAll('.trash-items-container > *'))

    DOMremovedNote.remove()

    const DOM_notes = document.querySelectorAll('.content-section > .note-container')

    redoIds(notesSection.notes, DOM_notes)

    saveStorage(addProjectToStorage)

}

export {removeNote}