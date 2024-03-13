import { createElement } from "../utility/createElement";

function createTrashSection(){
    const trashHeader = createElement({class:'trash-header'}, 'h1', 'Trash Section', [])
    const trashItemsContainer = createElement({class:'trash-items-container'}, 'div', '', [])

    const trashContainer = createElement({class:'trash-section'}, 'div', '', [trashHeader, trashItemsContainer])

    return trashContainer
}

function repurposeIcons(trashedItem){
    const icons = trashedItem.children[1].querySelectorAll('i')
    const restoreFromTrashIcon = createElement({class:'restore-from-trash-icon fa-solid fa-trash-can-arrow-up'}, 'i', '', [])
    const removeFromTrashIcon = createElement({class:'remove-from-trash-icon fa-regular fa-circle-xmark'}, 'i', '', [])
    const trashIcons = [restoreFromTrashIcon , removeFromTrashIcon]

    icons.forEach((icon, index) =>{
        trashedItem.children[1].replaceChild(trashIcons[index], icon)
    })


    return trashedItem
}

export {createTrashSection, repurposeIcons}