import { createElement } from '../utility/createElement.js'
import { TaskForm } from '../DOM-functions/create-task-forms.js'
import { NoteForm } from '../DOM-functions/create-note-forms.js'

function createContentSection(){

    const content_section=createElement({class:'content-section'}, 'div', '', [NoteForm.createForm(), TaskForm.createForm()])

    return content_section
}

let content = createContentSection()

export {content}