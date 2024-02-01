import { Storage } from "../main-Storage";
const CircularJSON = require('circular-json')

export function saveStorage(){
    localStorage.setItem('Storage', CircularJSON.stringify(Storage))
}