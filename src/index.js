import '@fortawesome/fontawesome-free/css/all.css';
import { header } from './modules/DOM/generate-content/generate-header.js'
import { footer } from './modules/DOM/generate-content/generate-footer.js'
import { sideBar } from './modules/DOM/generate-content/generate-sideBar.js';
import { projectGenerator } from './modules/Logic/project-Generator.js';
import { viewAll } from './modules/Logic/view-all-projects.js';
import { content } from './modules/DOM/generate-content/generate-content-section.js';
import '../src/modules/Styles/main.css'
import { mainStorage } from './modules/Storage/main-Storage.js';

document.body.appendChild(header)
document.body.appendChild(sideBar)
document.body.appendChild(content)
document.body.appendChild(footer)



mainStorage()