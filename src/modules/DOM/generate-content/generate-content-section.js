import { createElement } from '../utility/createElement.js'
import { createEditTaskForm, createGenerateTaskForm } from '../DOM-functions/create-task-forms.js'
import { createEditNoteForm, createGenerateNoteForm } from '../DOM-functions/create-note-forms.js'
import { createNumberInputForm } from '../DOM-functions/createNumberInputForm.js'

function createContentSection(){
    

    const content_section=createElement({class:'content-section'}, 'div', '', [createEditNoteForm(), createEditTaskForm(), createGenerateNoteForm(), createGenerateTaskForm(), createNumberInputForm()])

    return content_section
}

let content = createContentSection()

export {content}