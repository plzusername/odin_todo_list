import {projectGenerator} from './modules/Logic/project-Generator.js'

let a=new projectGenerator()
let b=new projectGenerator()
let c=new projectGenerator()
let d=new projectGenerator()
let e=new projectGenerator()
let af=new projectGenerator()
let aff=new projectGenerator()
let afdf=new projectGenerator()


a.addTask('Hi there', 'hi there', false, 'LOW', '12/12/2024')
a.addTask('Hi there', 'hi there', true, 'LOW', '12/12/2024')
b.addTask('Hi there', 'hi there', true, 'LOW', '12/12/2024')
c.addTask('Hi there', 'hi there', true, 'LOW', '12/12/2024')
a.tasks[0].changeProject(c)
d.addTask('Hi there', 'hi there', true, 'LOW', '12/12/2024')
c.removeTask(0)

console.log([a,b,c,d,e,af,aff,afdf])