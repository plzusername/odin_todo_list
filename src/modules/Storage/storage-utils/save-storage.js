const CircularJSON = require('circular-json')

export function saveStorage(){
    

    if (localStorage.getItem('Storage') == null){
        let Storage = {
            projects: [],
            notes: [],
            trash: [],
            calendar: {},
            tempDateFilter: []
        }
        localStorage.setItem('Storage', CircularJSON.stringify(Storage))
    }
    localStorage.setItem('Storage', CircularJSON.stringify(localStorage.getItem('Storage')))

}

