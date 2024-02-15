import CircularJSON from "circular-json"

let Storage = localStorage.getItem('Storage') == null ?  {
    projects: [],
    trash: [],
    tempDateFiltered: [],
    notes: [],
    calendar: {}
} : CircularJSON.parse(localStorage.getItem('Storage'))


export {Storage}


export function saveStorage(whatToDoToStorage){

    Storage = whatToDoToStorage()    

    localStorage.setItem('Storage', JSON.stringify(Storage))


}