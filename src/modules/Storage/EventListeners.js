import {addProjet} from './itemStorage/addProject'
import {saveStorage} from './storage-utils/save-storage'

const body = document.body
const addProjectButton = document.querySelector('.Add-project')


document.addEventListener('DOMContentLoaded', ()=>{
    saveStorage()
    document.querySelector('.Add-project').addEventListener('click', addProjet)
    body.addEventListener('click', saveStorage)

})