import { saveStorage, Storage } from "../../storage-utils/save-storage"
import { trashSection } from "../../../Logic/trash-section"
import { redoIds } from "../../../Logic/redoIds"

function removeTrashFromStorage(){
    Storage.trash = trashSection.trashedItems
    return Storage
}

function removeFromTrash(){
    const itemToBeRemoved = event.target.parentNode.parentNode
    const objectToBeRemoved = trashSection.trashedItems[itemToBeRemoved.dataset.id]
    const trashedItems = document.querySelectorAll('.trash-items-container > *')

    trashSection.removeFromTrash(objectToBeRemoved)

    saveStorage(removeTrashFromStorage)

    itemToBeRemoved.remove()

    redoIds('none', trashedItems)
}

export {removeFromTrash}