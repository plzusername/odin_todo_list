const CircularJSON = require('circular-json')

export function saveStorage(){
    localStorage.setItem('Storage', CircularJSON.stringify(Storage))
}

export const Storage = {
    projects: [],
    notes: [],
    trash: [],
    calendar: {},
    tempDateFilter: []
}