import { createElement } from "../utility/createElement"

function createInputAdder(labelTextContent){

    const project_add_label=createElement({class:'add-project-label', for:'project_input'}, 'label', labelTextContent, [])
    const project_add_input=createElement({class:'add-project-input', id:'project_input'}, 'input', '', [])

    const project_input=createElement({class:'add-project-input-section'}, 'div', '', [project_add_label,project_add_input])
    const add_icon=createElement({class:'project-add-icon fa-solid fa-plus'}, 'i', '',[])

    const inputAdderSection=createElement({class:'add-project-section'}, 'div', '', [project_input,add_icon])


    return inputAdderSection
}

export {createInputAdder}