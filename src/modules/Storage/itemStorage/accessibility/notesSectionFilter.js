import { Storage } from "../../storage-utils/save-storage"
import { noteDomification } from '../../../DOM/DOM-functions/noteDomification'
import { content } from "../../../DOM/generate-content/generate-content-section"
import { createInputAdder } from "../../../DOM/DOM-functions/create-input-adder"
import { createElement } from "../../../DOM/utility/createElement"

function switchToNotesSection(){
    const notes = Storage.notes
    const createNoteText = createElement({class:'create-note-text'},'span', 'Create note', [])
    const createNoteIcon = createInputAdder('Create Note')['add_icon']
    const createNoteSection = createElement({class:'add-project-section'}, 'div', '', [createNoteText, createNoteIcon])
    const addersSection = createElement({class:'note-adder-container'}, 'div', '', [createNoteSection])
    notes.forEach(note =>{
        content.appendChild(noteDomification(note))
    })
    content.appendChild(addersSection)


}

export {switchToNotesSection}