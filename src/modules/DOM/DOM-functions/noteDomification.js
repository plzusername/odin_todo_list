import { createElement } from "../utility/createElement";

function noteDomification(note){
    const titleText=document.createTextNode(note.title)
    const descriptionText=document.createTextNode(note.description)

    const noteTitle=createElement({class:'note-title'}, 'h1', '', [titleText])
    const noteDescription=createElement({class:'note-description'}, 'p',  '', [descriptionText])
    const noteDelete=createElement({class:'note-delete-icon fa-solid fa-trash-can'}, 'i',  '', [])
    const noteEdit=createElement({class:'note-edit-icon fa-regular fa-pen-to-square'}, 'i',  '', [])

    const noteText=createElement({class:'note-text-container'}, 'div', '', [noteTitle, noteDescription])

    const rightSide=createElement({class:'note-right-side'}, 'div', '', [noteDelete, noteEdit])

    const noteContainer=createElement({class:'note-container'}, 'div', '', [noteText,rightSide])

    noteContainer.dataset.id = note.id
    noteEdit.dataset.id = note.id
    noteDelete.dataset.id = note.id

    return noteContainer

}

export {noteDomification}