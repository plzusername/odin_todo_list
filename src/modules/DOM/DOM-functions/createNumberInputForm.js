const { isBefore, isAfter, add  } = require("date-fns");
import { createElement } from "../utility/createElement"
import { Storage, saveStorage } from "../../Storage/storage-utils/save-storage"
import { content } from "../generate-content/generate-content-section"
import { switchBetweenSections } from "../../Storage/itemStorage/accessibility/sectionSwitching";
import { domifyStorageProjects } from "../../Storage/itemStorage/projectStorage/domifyProjectStorage";
import Sortable from "sortablejs";
import { projectDomify } from "./generate-DOM-project";
import { projectGenerator } from "../../Logic/project-Generator";

function filterDate(){
    return Storage
}

function createNumberInputForm(){
    const dayFormHeader=createElement({class:'day-form-header'}, 'h1', `task`, [])

    const titleInput=createElement({class:'title-input-day-create', type:'number', min:'-1000', max:'1000'}, 'input', '', [])
    titleInput.required=true
    const titleInputSection=createElement({class:'title-input-day-section'}, 'label', 'Title:', [titleInput])

    const submitButton=createElement({class:'day-submit-button', type:'submit'} ,'button', `Filter tasks`)


    const dayForm=createElement({class:`day-form`}, 'form', '', [dayFormHeader,titleInputSection,submitButton])
    
    dayFormHeader.textContent = 'Set day amount'

    dayForm.addEventListener('submit',()=>{
        const daysToFilter = +titleInput.value

        const DOMprojects = domifyStorageProjects()

        switchBetweenSections()

        DOMprojects.forEach(project =>{
            project = project.cloneNode(true)
            content.appendChild(project)
            const tasks = project.querySelectorAll('.task-container')
            tasks.forEach(task =>{
                const taskDateValue = task.querySelector('.task-date-input').value
                const beforeOrAfterToday = daysToFilter > 0 ? isAfter(taskDateValue, new Date()) : isBefore(taskDateValue, new Date())
                const withinDayLimit = daysToFilter > 0 ? isBefore(taskDateValue, add(new Date(), { days: daysToFilter })) : isAfter(taskDateValue, add(new Date(), { days: daysToFilter }))

                if(!beforeOrAfterToday || !withinDayLimit){
                    task.remove()
                }
            })
        })

        dayForm.classList.remove('visible')

        titleInput.value = null

        event.preventDefault()

        saveStorage(filterDate)
    })

    return dayForm

}

export {createNumberInputForm}