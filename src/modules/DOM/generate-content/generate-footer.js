import { createElement } from '../utility/createElement.js'

function createFooterSection(){
    const gtihubLogo=createElement({class:'github-logo fa-brands fa-github'}, 'i', '', [])
    const githubUsername=createElement({class:'github-username'}, 'p', 'MOFRIS', [])

    const linkSection=createElement({class:'link-section'}, 'a', '', [gtihubLogo, githubUsername])

    const footer_section=createElement({class:'footer-section'}, 'div', '', [linkSection])

    return footer_section
}

let footer = createFooterSection()

export {footer}