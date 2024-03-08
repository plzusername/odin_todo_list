import { notesGenerator } from "../../Logic/notes-generator";
import { notesSection } from "../../Logic/notes-section";
import { content } from "../generate-content/generate-content-section";
import { createElement } from "../utility/createElement";
import { noteDomification } from "./noteDomification";
import { saveStorage, Storage } from "../../Storage/storage-utils/save-storage";

let generatedNote

function addTaskToStorage(){
    // Storage.notes.push(generatedNote)
    Storage.notes = notesSection.notes
    return Storage
}

function createGenerateNoteForm(){
    const formHeader=createElement({class:'note-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-note'}, 'input', '', [])
    const titleInputSection=createElement({class:'title-input-section-note'}, 'label', 'Title:', [titleInput])

    const descriptionInput=createElement({class:'description-input-note'}, 'input', '', [])
    const descriptionInputSection=createElement({class:'description-input-section-note'}, 'label', 'Description:', [descriptionInput])

    titleInput.required = true
    descriptionInput.required = true

    const submitButton=createElement({class:'note-submit-button', type:'submit'} ,'button', `note`)


    const noteForm=createElement({class:`create-note-form`}, 'form', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])

    formHeader.textContent = 'Create note'

    noteForm.addEventListener('submit' ,()=>{

        generatedNote = new notesGenerator(titleInput.value , descriptionInput.value)

        notesSection.addItem(generatedNote)

        saveStorage(addTaskToStorage)

        titleInput.value = ''
        descriptionInput.value = ''

        const noteDOM = noteDomification(generatedNote)
        const noteAdder = document.querySelector('.note-adder-container')

        content.insertBefore(noteDOM, noteAdder)

        noteForm.classList.remove('visible')

        const formAffect = document.querySelector('.form-affect')
        formAffect.classList.remove('form-affect-visible')
    
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