function redoIds(items){
    items.forEach((item, index) => {
        item.id = index
    });
}

export{ redoIds }