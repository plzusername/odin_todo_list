import { createElement } from "../utility/createElement";

function createNoteForm(mode){
    const formHeader=createElement({class:'note-form-header'}, 'h1', `${mode} task`, [])

    const titleInput=createElement({class:'title-input-note'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-section-note'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-note'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-section-note'}, 'label', 'Description:', [descriptionInput])

    const submitButton=createElement({class:'task-submit-button'} ,'button', `${mode} note`)


    const taskForm=createElement({class:`note-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])

    return noteForm
}

export {createNoteForm}