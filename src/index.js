import {projectGenerator} from './modules/Logic/project-Generator.js'
import {viewAll} from './modules/Logic/view-all-projects.js'
const { isBefore, isAfter, add  } = require("date-fns");
let a=new projectGenerator()


a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2028, 0, 20)}`)
a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 20)}`)
a.addTask('Hi there', 'hi there', true, 'LOW', `${new Date(2024, 0, 29)}`)

console.log(viewAll.filterTasksBasedOnDays(4000))
console.log(viewAll.projects)