export default function addChildrenToElement(parentElement, children){
    if(children.length != 0){
        children.forEach(child => {
            parentElement.appendChild(child)
        });    
    }
}