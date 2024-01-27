import { createElement } from '../utility/createElement.js'
import { generateFilter } from '../DOM-functions/generate-filter.js'

function createSideBarSection(){

    const home_section_filters=[generateFilter('View All', 'view-all-filter'),generateFilter('Trash', 'trash-filter'),generateFilter('Time filter', 'time-filter'),generateFilter('Calendar', 'calendar-filter')]

    const home_section=createElement({class:'sideBar-home-section'}, 'div', '', [...home_section_filters])
    const projects_section=createElement({class:'sideBar-projects-section'}, 'div', '', [])

    const sideBar_section=createElement({class:'sideBar-section'}, 'div', '', [home_section, projects_section])

    return sideBar_section
}

let sideBar = createSideBarSection()

export {sideBar}