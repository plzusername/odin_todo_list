function redoIds(items, elements = undefined){
    if(items != 'none'){
        items.forEach((item, index) => {
            item.id = index
        });
    }
    if(elements){
        elements.forEach((element, index) =>{
            element.dataset.id = index
        })    
    }
}

export{ redoIds }