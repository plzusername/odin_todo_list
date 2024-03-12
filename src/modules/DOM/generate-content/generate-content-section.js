import { createElement } from '../utility/createElement.js'
import { createEditTaskForm, createGenerateTaskForm } from '../DOM-functions/create-task-forms.js'
import { createEditNoteForm, createGenerateNoteForm } from '../DOM-functions/create-note-forms.js'
import { createNumberInputForm } from '../DOM-functions/createNumberInputForm.js'
import { createTrashSection } from '../DOM-functions/createTrashSection.js'

const formAffect = createElement({class:'form-affect'}, 'div', '', [])

function createContentSection(){
    const content_section=createElement({class:'content-section'}, 'div', '', [createEditNoteForm(), createEditTaskForm(), createGenerateNoteForm(), createGenerateTaskForm(), createNumberInputForm(), createTrashSection()])

    return content_section
}

function showEffect(formToShow){
    const formAffect = document.querySelector('.form-affect')
    formAffect.classList.add('form-affect-visible')
    formToShow.classList.add('visible')
}

function hideEffect(formToHide){
    const formAffect = document.querySelector('.form-affect')
    const delayTime = 300
    formAffect.classList.remove('form-affect-visible')
    formToHide.classList.remove('visible')
    setTimeout(()=>{
        if(formToHide.querySelectorAll('input').length > 0){
            formToHide.querySelectorAll('input').forEach(input =>{
                input.value = ''
        })
        if(formToHide.querySelector('select') != null) formToHide.querySelector('select').selectedIndex = 0    
    }    
    },delayTime)
}

let content = createContentSection()

export {content, formAffect, showEffect, hideEffect}