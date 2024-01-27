import { createElement } from '../utility/createElement.js'

function generateFilter(filterSectionName,extraClasses){
    const filterName=createElement({class:`filter-name`}, 'i', filterSectionName, [])
    const filterIcon=createElement({class:`filter-icon fa-regular fa-greater-than`}, 'i', '', [])

    const filter=createElement({class:`filter-container ${extraClasses}`}, 'div', '', [filterIcon, filterName])

    return filter
}

export {generateFilter}