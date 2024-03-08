import { createElement } from '../utility/createElement.js'
import { createEditTaskForm, createGenerateTaskForm } from '../DOM-functions/create-task-forms.js'
import { createEditNoteForm, createGenerateNoteForm } from '../DOM-functions/create-note-forms.js'
import { createNumberInputForm } from '../DOM-functions/createNumberInputForm.js'
import { createTrashSection } from '../DOM-functions/createTrashSection.js'

const formAffect = createElement({class:'form-affect'}, 'div', '', [])

function createContentSection(){
    const content_section=createElement({class:'content-section'}, 'div', '', [createEditNoteForm(), createEditTaskForm(), createGenerateNoteForm(), createGenerateTaskForm(), createNumberInputForm(), ])

    return content_section
}

let content = createContentSection()

export {content, formAffect}