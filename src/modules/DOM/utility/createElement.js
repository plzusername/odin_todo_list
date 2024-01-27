import appendChildren from './add-Children-To-Element.js'

function createElement(attributes, type = 'div', textContent = '', children = []){

    let newElement=document.createElement(type)

    for (const [key, value] of Object.entries(attributes)) {
        newElement.setAttribute(key, value)                
    }

    const elementTextNode=document.createTextNode(textContent)
    newElement.appendChild(elementTextNode)
    appendChildren(newElement, children)


    return newElement
}

export{createElement}