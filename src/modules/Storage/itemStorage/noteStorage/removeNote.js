import { notesSection } from '../../../Logic/notes-section' 
import { saveStorage, Storage } from '../../storage-utils/save-storage'
import { redoIds } from '../../../Logic/redoIds'
import { trashSection } from '../../../Logic/trash-section'
import { createElement } from '../../../DOM/utility/createElement'

let removedNote

function addProjectToStorage(){
    Storage.notes = notesSection.notes
    Storage.trash = trashSection.trashedItems
    return Storage
}

function removeNote(){
    const DOMtrashSection = document.querySelector('.trash-section > .trash-items-container')
    const restoreFromTrashIcon = createElement({class:'restore-from-trash-icon fa-solid fa-trash-can-arrow-up'}, 'i', '', [])
    const removeFromTrashIcon = createElement({class:'remove-from-trash-icon fa-regular fa-circle-xmark'}, 'i', '', [])
    const trashOptions = createElement({class:'trash-icons'}, 'div', '', [restoreFromTrashIcon, removeFromTrashIcon])
    const removeButton = event.target
    const DOMremovedNote = removeButton.closest('.note-container')

    const clonedNote = DOMremovedNote.cloneNode(true)
    clonedNote.replaceChild(trashOptions, clonedNote.children[1])

    removedNote = notesSection.notes[DOMremovedNote.dataset.id]

    notesSection.removeNote(removedNote)

    DOMtrashSection.appendChild(clonedNote)

    redoIds(trashSection.trashedItems, document.querySelectorAll('.trash-items-container > *'))

    DOMremovedNote.remove()

    const DOM_notes = document.querySelectorAll('.content-section > .note-container')
    console.log(DOM_notes)

    redoIds(notesSection.notes, DOM_notes)

    saveStorage(addProjectToStorage)

}

export {removeNote}