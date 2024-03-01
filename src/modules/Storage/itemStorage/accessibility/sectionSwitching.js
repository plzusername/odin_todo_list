function switchBetweenSections(){
    const nonFormContent = Array.from(document.querySelectorAll('.content-section > *:not(form)'))

    nonFormContent.forEach(item =>{
        item.remove()
    })
    console.log(nonFormContent)
}
export {switchBetweenSections}