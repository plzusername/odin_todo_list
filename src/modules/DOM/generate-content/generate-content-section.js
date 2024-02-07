import { createElement } from '../utility/createElement.js'
import { createEditTaskForm, createGenerateTaskForm } from '../DOM-functions/create-task-forms.js'
import { createEditNoteForm, createGenerateNoteForm } from '../DOM-functions/create-note-forms.js'

function createContentSection(){
    

    const content_section=createElement({class:'content-section'}, 'div', '', [createEditNoteForm(), createEditTaskForm(), createGenerateNoteForm(), createGenerateTaskForm()])

    return content_section
}

let content = createContentSection()

export {content}