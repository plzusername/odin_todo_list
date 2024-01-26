import appendChildren from './add-Children-To-Element.js'

function createElementt(attributes, type = 'div', textContent = '', children = []){

    let newElement=document.createElement(type)

    for (const [key, value] of Object.entries(attributes)) {
        newElement.setAttribute(key, value)                
    }

    const elementTextNode=document.createTextNode(textContent)
    appendChildren(newElement, children)

    newElement.appendChild(elementTextNode)

    return newElement
}