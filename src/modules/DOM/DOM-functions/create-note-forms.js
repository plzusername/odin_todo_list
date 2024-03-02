import { notesGenerator } from "../../Logic/notes-generator";
import { notesSection } from "../../Logic/notes-section";
import { content } from "../generate-content/generate-content-section";
import { createElement } from "../utility/createElement";
import { noteDomification } from "./noteDomification";

function createGenerateNoteForm(){
    const formHeader=createElement({class:'note-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-note'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-section-note'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-note'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-section-note'}, 'label', 'Description:', [descriptionInput])

    const submitButton=createElement({class:'note-submit-button', type:'submit'} ,'button', `note`)


    const noteForm=createElement({class:`create-note-form`}, 'form', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])

    formHeader.textContent = 'Create note'

    submitButton.addEventListener('click' ,()=>{

        generatedTask = new notesGenerator(titleInput.value , descriptionInput.value)

        notesSection.addItem(generatedTask)

        saveStorage(addTaskToProjectStorage)

        titleInput.value = ''
        descriptionInput.value = ''
        dueDateInput.value = null
        priorityInput.selectedIndex = 0

        content.appendChild(noteDomification(generatedTask))

        taskForm.classList.remove('visible')

        event.preventDefault()
    })

    return noteForm    
}

function createEditNoteForm(){
    const formHeader=createElement({class:'note-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-note'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-section-note'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-note'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-section-note'}, 'label', 'Description:', [descriptionInput])

    const submitButton=createElement({class:'note-submit-button', type:'submit'} ,'button', `note`)


    const noteForm=createElement({class:`edit-note-form`}, 'form', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])

    formHeader.textContent = 'Edit note'

    submitButton.addEventListener('click' ,()=>{})

    return noteForm    
}

export {createEditNoteForm,createGenerateNoteForm}