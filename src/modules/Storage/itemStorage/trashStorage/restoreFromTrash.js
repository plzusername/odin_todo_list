import { notesSection } from "../../../Logic/notes-section"
import { redoIds } from "../../../Logic/redoIds"
import { trashSection } from "../../../Logic/trash-section"
import { viewAll } from "../../../Logic/view-all-projects"
import { saveStorage, Storage } from "../../storage-utils/save-storage"
import { viewProjects } from "../accessibility/viewAllProjects"
import { switchToNotesSection } from "../accessibility/notesSectionFilter"

function restoreFromTrashStorage(){
    Storage.projects = viewAll.projects
    Storage.notes = notesSection.notes
    Storage.trash = trashSection.trashedItems
    return Storage
}

function restoreFromTrash(){
    const restoredItem = event.target.parentNode.parentNode

    restoredItem.remove()
    const trashedItems = document.querySelectorAll('.trash-items-container > *')
    redoIds('none', trashedItems)

    const correspondingTrashItem = trashSection.trashedItems[restoredItem.dataset.id]

    trashSection.restoreItem(correspondingTrashItem)

    if(restoredItem.classList.contains('note-container')){
        switchToNotesSection()
    }
    else{
        viewProjects()
    }


    saveStorage(restoreFromTrashStorage)

}

export {restoreFromTrash}