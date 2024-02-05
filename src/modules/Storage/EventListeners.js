import {addProjet} from './addProject'
import {saveStorage} from './save-storage'

const body = document.body
const addProjectButton = document.querySelector('.Add-project')

addProjectButton.addEventListener('click', addProjet)
body.addEventListener('click', saveStorage)