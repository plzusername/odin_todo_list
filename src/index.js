import '@fortawesome/fontawesome-free/css/all.css';
import { header } from './modules/DOM/generate-content/generate-header.js'
import { footer } from './modules/DOM/generate-content/generate-footer.js'
import { sideBar } from './modules/DOM/generate-content/generate-sideBar.js';
import { content } from './modules/DOM/generate-content/generate-content-section.js';
import '../src/modules/Styles/main.css'
import { populateArrays } from './modules/Storage/storage-utils/populateArrays.js';
window.projects = []

document.body.appendChild(header)
document.body.appendChild(sideBar)
document.body.appendChild(content)
document.body.appendChild(footer)

populateArrays()
// renderSotrage()

import './modules/Storage/EventListeners.js'
