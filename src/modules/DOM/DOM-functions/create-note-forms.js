import { createElement } from "../utility/createElement";

function createGenerateNoteForm(){
    const formHeader=createElement({class:'note-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-note'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-section-note'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-note'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-section-note'}, 'label', 'Description:', [descriptionInput])

    const submitButton=createElement({class:'note-submit-button'} ,'button', `note`)


    const noteForm=createElement({class:`note-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])

    formHeader.textContent = 'Create note'

    submitButton.addEventListener('click' , /*Create task with DOM logic and storage*/)

    return noteForm    
}

function createEditNoteForm(){
    const formHeader=createElement({class:'note-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-note'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-section-note'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-note'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-section-note'}, 'label', 'Description:', [descriptionInput])

    const submitButton=createElement({class:'note-submit-button'} ,'button', `note`)


    const noteForm=createElement({class:`note-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])

    formHeader.textContent = 'Edit note'

    submitButton.addEventListener('click' , /*Create task with DOM logic and storage*/)

    return noteForm    
}

export {createEditTaskForm,createGenerateTaskForm}