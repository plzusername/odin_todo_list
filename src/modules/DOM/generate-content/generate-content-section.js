import { createElement } from '../utility/createElement.js'

function createContentSection(){

    const content_section=createElement({class:'content-section'}, 'div', '', [])

    return content_section
}

let content = createContentSection()

export {content}