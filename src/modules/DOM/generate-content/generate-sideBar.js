import { createElement } from '../utility/createElement.js'
import { generateFilter } from '../DOM-functions/generate-filter.js'
import { createInputAdder } from '../DOM-functions/create-input-adder.js'

function createSideBarSection(){

    const home_section_header=createElement({class:'home-section-header'}, 'h1', 'Home', [])
    const project_section_header=createElement({class:'project-section-header'}, 'h1', 'Projects', [])

    const home_section_filters=[generateFilter('View All', 'view-all-filter'),generateFilter('Trash', 'trash-filter'),generateFilter('Time filter', 'time-filter'),generateFilter('Calendar', 'calendar-filter'),generateFilter('Notes', 'notes-section')]

    const add_project_section=createInputAdder('Add project')["inputAdderSection"]

    const home_section=createElement({class:'sideBar-home-section'}, 'div', '', [home_section_header,...home_section_filters])
    const projects_section=createElement({class:'sideBar-projects-section'}, 'div', '', [project_section_header,add_project_section])

    const sideBar_section=createElement({class:'sideBar-section'}, 'div', '', [home_section, projects_section])

    return sideBar_section
}

let sideBar = createSideBarSection()

export {sideBar}