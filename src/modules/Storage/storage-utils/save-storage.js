import { Storage } from "../main-Storage";

export function saveStorage(){
    localStorage.setItem('Storage', JSON.stringify(Storage))
}