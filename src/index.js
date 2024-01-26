import {projectGenerator} from './modules/Logic/project-Generator.js'
import {viewAll} from './modules/Logic/view-all-projects.js'
import { trashSection } from './modules/Logic/trash-section.js'
import { notesSection } from './modules/Logic/notes-section.js'
import { notesGenerator } from './modules/Logic/notes-generator.js'

let a=new projectGenerator()
let b=new projectGenerator()
let c=new projectGenerator()


a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2026, 9, 10)}`)
b.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 6, 24)}`)
c.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2025, 3, 8)}`)

console.log(viewAll.filterTasksBasedOnDays(300))
console.log(viewAll.projects)