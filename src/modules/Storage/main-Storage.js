import {StoreAddedProject} from './projects-Storage'
import { saveStorage } from './storage-utils/save-storage'

const addTaskButton = document.querySelector('.task-add-icon')
const editTaskButton = document.querySelector('.task-edit-icon')
const deleteTaskButton = document.querySelector('.task-delete-icon')
const taskCheck = document.querySelector('.task-check')
const noteSubmit = document.querySelector('.note-submit-button')
const taskSubmit = document.querySelector('.task-submit-button')


let Storage = {
    calendar:{},
    projects:[],
    trash:[],
    notes:[],
    temporaryDateFilter:[]
}

function mainStorage(){
    const addProjectButton = document.querySelector('.Add-project')

    addProjectButton.addEventListener('click', StoreAddedProject)

    saveStorage()
}

export { mainStorage , Storage}