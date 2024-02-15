function redoIds(items, elements = undefined){
    items.forEach((item, index) => {
        item.id = index
    });

    if(elements){
        elements.forEach((element, index) =>{
            element.dataset.id = index
        })    
    }
}

export{ redoIds }