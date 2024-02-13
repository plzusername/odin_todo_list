import { content } from '../DOM/generate-content/generate-content-section'

function redoIds(items, elements){
    items.forEach((item, index) => {
        item.id = index
    });

    const elementsToLoop = document.querySelectorAll(elements)

    elementsToLoop.forEach((element, index) =>{
        element.dataset.id = index
    })
}

export{ redoIds }