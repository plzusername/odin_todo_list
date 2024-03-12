import { createElement } from "../utility/createElement";

function createTrashSection(){
    const trashHeader = createElement({class:'trash-header'}, 'h1', 'Trash Section', [])
    const trashItemsContainer = createElement({class:'trash-items-container'}, 'div', '', [])

    const trashContainer = createElement({class:'trash-section'}, 'div', '', [trashHeader, trashItemsContainer])

    return trashContainer
}

export {createTrashSection}