const CircularJSON = require('circular-json')

let Storage = localStorage.getItem('Storage') == null ? {
    projects: [],
    trash: [],
    tempDateFiltered: [],
    notes: [],
    calendar: {}
}: localStorage.getItem('Storage')


export {Storage}


export function saveStorage(whatToDoToStorage){

    Storage = whatToDoToStorage()    

    localStorage.setItem('Storage', CircularJSON.stringify(Storage))


}

// saveStorage()
