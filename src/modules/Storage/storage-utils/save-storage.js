import CircularJSON from "circular-json"

const StorageStructure = {
    projects: [],
    trash: [],
    notes: [],
}

let Storage = localStorage.getItem('Storage') == null ?
    StorageStructure
    : 
    CircularJSON.parse(localStorage.getItem('Storage'))

export {Storage}


export function saveStorage(whatToDoToStorage){

    Storage = whatToDoToStorage()    

    localStorage.setItem('Storage', JSON.stringify(Storage))


}