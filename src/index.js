import '@fortawesome/fontawesome-free/css/all.css';
import { header } from './modules/DOM/generate-content/generate-header.js'
import { footer } from './modules/DOM/generate-content/generate-footer.js'
import { sideBar } from './modules/DOM/generate-content/generate-sideBar.js';
import { projectGenerator } from './modules/Logic/project-Generator.js';
import { viewAll } from './modules/Logic/view-all-projects.js';
import { content } from './modules/DOM/generate-content/generate-content-section.js';
import '../src/modules/Styles/main.css'

document.body.appendChild(header)
document.body.appendChild(sideBar)
document.body.appendChild(content)
document.body.appendChild(footer)

let a=new projectGenerator()
let b=new projectGenerator()
let c=new projectGenerator()

a.addTask('title', 'description', true, 'LOW',  `${new Date(2023,9,10)}`)
b.addTask('title', 'description', true, 'LOW',  `${new Date(2023,9,10)}`)
c.addTask('title', 'description', true, 'LOW',  `${new Date(2025,9,10)}`)

console.log(viewAll.projects)