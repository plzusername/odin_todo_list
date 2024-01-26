import { createElement } from '../utility/createElement.js'

function createHeaderSection(){
    const todoLogoImage=createElement({class:'todo-logo-image fa-regular fa-circle-check'}, 'i', '',[])
    const todoLogoHeader=createElement({class:'todo-logo-header'}, 'h1', 'TODO',[])

    const logoSection=createElement({class:'logo-section'}, 'div', '',[todoLogoImage,todoLogoHeader])
    const signUpButton=createElement({class:'sign-up-button'}, 'button', 'Sign Up',[])

    const header_section=createElement({class:'header-section'}, 'div', '', [logoSection,signUpButton])

    return header_section
}

let header = createHeaderSection()

export {header}