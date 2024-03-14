function redoIds(items, elements = undefined, redoParentProject = false){
    if(items != 'none'){
        items.forEach((item, index) => {
            item.id = index
        });
    }
    if(redoParentProject){
        items.forEach((item, index) => {
            item.tasks.forEach(task =>{
                task.parent_project.id = index
            })
        });
    }
    if(elements){
        elements.forEach((element, index) =>{
            element.dataset.id = index
        })    
    }
}

export{ redoIds }