import { createElement } from '../utility/createElement.js'
import { generateFilter } from '../DOM-functions/generate-filter.js'

function createSideBarSection(){

    const home_section_header=createElement({class:'home-section-header'}, 'h1', 'Home', [])
    const project_section_header=createElement({class:'project-section-header'}, 'h1', 'Projects', [])

    const home_section_filters=[generateFilter('View All', 'view-all-filter'),generateFilter('Trash', 'trash-filter'),generateFilter('Time filter', 'time-filter'),generateFilter('Calendar', 'calendar-filter'),generateFilter('Notes', 'notes-section')]

    const project_add_label=createElement({class:'add-project-label', for:'project_input'}, 'label', 'Add Project', [])
    const project_add_input=createElement({class:'add-project-input', id:'project_input'}, 'input', '', [])

    const project_input=createElement({class:'add-project-input-section'}, 'div', '', [project_add_label,project_add_input])
    const add_icon=createElement({class:'project-add-icon fa-solid fa-plus'}, 'i', '',[])

    const add_project_section=createElement({class:'add-project-section'}, 'div', '', [project_input,add_icon])

    const home_section=createElement({class:'sideBar-home-section'}, 'div', '', [home_section_header,...home_section_filters])
    const projects_section=createElement({class:'sideBar-projects-section'}, 'div', '', [project_section_header,add_project_section])

    const sideBar_section=createElement({class:'sideBar-section'}, 'div', '', [home_section, projects_section])

    return sideBar_section
}

let sideBar = createSideBarSection()

export {sideBar}