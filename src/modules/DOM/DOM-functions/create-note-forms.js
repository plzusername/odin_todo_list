import { createElement } from "../utility/createElement";

class NoteForm{

    static createForm(){
        const formHeader=createElement({class:'note-form-header'}, 'h1', `task`, [])

        const titleInput=createElement({class:'title-input-note'}, 'input', '', [])
        const titleInputSection=createElement({class:'title-input-section-note'}, 'label', 'Title:', [titleInput])
    
        const descriptionInput=createElement({class:'description-input-note'}, 'input', '', [])
        const descriptionInputSection=createElement({class:'description-input-section-note'}, 'label', 'Description:', [descriptionInput])
    
        const submitButton=createElement({class:'note-submit-button'} ,'button', `note`)
    
    
        const noteForm=createElement({class:`note-form`}, 'div', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])
    
        return noteForm    
    }

    static editorizeForm(){
        const formHeader=document.querySelector('.note-form-header')
        const submitButton=document.querySelector('.note-submit-button')

        formHeader.textContent = 'Edit form'

        submitButton.addEventListener('click' , /*Edit bote with DOM logic and storage*/)
    }

    static creatizeForm(){
        const formHeader=document.querySelector('.note-form-header')
        const submitButton=document.querySelector('.note-submit-button')

        formHeader.textContent = 'Create form'

        submitButton.addEventListener('click' , /*Create bote with DOM logic and storage*/)

    }
}

export {NoteForm}