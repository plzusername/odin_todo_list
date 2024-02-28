import { createElement } from "../utility/createElement"
import { viewAll } from "../../Logic/view-all-projects"
import { Storage } from "../../Storage/storage-utils/save-storage"

function createNumberInputForm(){
    const dayFormHeader=createElement({class:'day-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-day-create', type:'number', min:'-1000', max:'1000'}, 'input', '', [])
    titleInput.required=true
    const titleInputSection=createElement({class:'title-input-day-section'}, 'label', 'Title:', [titleInput])

    const submitButton=createElement({class:'day-submit-button', type:'submit'} ,'button', `Filter tasks`)


    const dayForm=createElement({class:`day-form`}, 'form', '', [dayFormHeader,titleInputSection,submitButton])
    
    dayFormHeader.textContent = 'Set day amount'

    dayForm.addEventListener('submit',()=>{

        Storage.tempDateFiltered = viewAll.filterTasksBasedOnDays(+titleInput.value)

        window.projects = document.querySelector('.content-section').querySelectorAll('.project-container')        

        dayForm.classList.remove('visible')

        titleInput.value = null

        event.preventDefault()
    })

    return dayForm

}

export {createNumberInputForm}