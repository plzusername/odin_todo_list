import {projectGenerator} from './modules/Logic/project-Generator.js'
import {viewAll} from './modules/Logic/view-all-projects.js'
import { trashSection } from './modules/Logic/trash-section.js'
import { notesSection } from './modules/Logic/notes-section.js'
import { notesGenerator } from './modules/Logic/notes-generator.js'

let a=new projectGenerator()
let b=new projectGenerator()
let c=new projectGenerator()


a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2028, 0, 20)}`)
b.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2028, 0, 20)}`)
c.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2028, 0, 20)}`)

notesSection.addNote('health plans', 'plans to get healthy')

notesSection.removeNote(notesSection.notes[0])
console.log(notesSection.notes)
trashSection.restoreFromTrash(trashSection.trashedItems[0])
console.log(trashSection.trashedItems)
console.log(notesSection.notes)
