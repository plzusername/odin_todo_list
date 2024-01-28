import { createElement } from '../utility/createElement.js'

function generateFilter(filterSectionName,extraClasses){
    const filterName=createElement({class:`filter-name`}, 'span', filterSectionName, [])
    const filterIcon=createElement({class:`filter-icon fa-solid fa-chevron-right`}, 'i', '', [])

    const filter=createElement({class:`filter-container ${extraClasses}`}, 'div', '', [filterIcon, filterName])

    return filter
}

export {generateFilter}