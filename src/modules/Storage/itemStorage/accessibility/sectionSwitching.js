function switchBetweenSections(){
    const nonFormContent = Array.from(document.querySelectorAll('.content-section > *:not(form):not(.trash-section)'))

    nonFormContent.forEach(item =>{
        item.remove()
    })
}
export {switchBetweenSections}