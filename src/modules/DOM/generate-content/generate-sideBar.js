import { createElement } from '../utility/createElement.js'

function createSideBarSection(){

    const home_section=createElement({class:'sideBar-home-section'}, 'div', '', [])
    const projects_section=createElement({class:'sideBar-projects-section'}, 'div', '', [])

    const sideBar_section=createElement({class:'sideBar-section'}, 'div', '', [home_section, projects_section])

    return sideBar_section
}

let sideBar = createSideBarSection()

export {sideBar}