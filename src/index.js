import {projectGenerator} from './modules/Logic/project-Generator.js'
import {viewAll} from './modules/Logic/view-all-projects.js'
let a=new projectGenerator()
let b=new projectGenerator()
let c=new projectGenerator()


a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2028, 0, 20)}`)
a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 29)}`)
b.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2028, 0, 20)}`)
b.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
b.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
b.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 29)}`)
c.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2028, 0, 20)}`)
c.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
c.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
c.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 29)}`)


console.log(viewAll.filterTasksBasedOnDays(10))
console.log(viewAll.projects)