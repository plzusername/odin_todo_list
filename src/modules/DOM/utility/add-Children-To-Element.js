export default function addChildrenToElement(parentElement, children){
    children.forEach(child => {
        parentElement.appendChild(child)
    });
}