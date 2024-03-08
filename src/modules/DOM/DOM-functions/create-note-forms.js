import { notesGenerator } from "../../Logic/notes-generator";
import { notesSection } from "../../Logic/notes-section";
import { content } from "../generate-content/generate-content-section";
import { createElement } from "../utility/createElement";
import { noteDomification } from "./noteDomification";
import { saveStorage, Storage } from "../../Storage/storage-utils/save-storage";

let generatedNote
let noteToBeEdited

function addTaskToStorage(){
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

    const submitButton=createElement({class:'note-submit-button', type:'submit'} ,'button', `Create note`)


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

    titleInput.required = true
    descriptionInput.required = true

    const submitButton=createElement({class:'note-submit-button', type:'submit'} ,'button', `Edit note`)


    const noteForm=createElement({class:`edit-note-form`}, 'form', '', [formHeader,titleInputSection,descriptionInputSection,submitButton])

    formHeader.textContent = 'Edit note'

    noteForm.addEventListener('submit' ,()=>{
        const noteToBeEditedDOM = document.querySelector(`.note-container[data-id="${window.noteToBeEditedIndex}"]`)
    
        noteToBeEdited = notesSection.notes[window.noteToBeEditedIndex]

        noteToBeEdited.editNote(titleInput.value, descriptionInput.value)

        const taskTitleText = noteToBeEditedDOM.querySelector('.note-title')
        const taskDescriptionText = noteToBeEditedDOM.querySelector('.note-description')

        taskTitleText.textContent = titleInput.value
        taskDescriptionText.textContent = descriptionInput.value

        saveStorage(addTaskToStorage)

        noteForm.classList.remove('visible')

        const formAffect = document.querySelector('.form-affect')
        formAffect.classList.remove('form-affect-visible')
    
        event.preventDefault()
  
    })

    return noteForm    
}

export {createEditNoteForm,createGenerateNoteForm}