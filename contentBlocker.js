contentBlocker(document.body)

function contentBlocker(element) {
    if(element.hasChildNodes()){
        element.childNodes.forEach(contentBlocker)
    } else if(element.nodeType === Text.TEXT_NODE){
                if(element.textContent.match(/china/gi)){
                    const newElement = document.createElement("span")
                    newElement.innerHTML = element.textContent.replace(/(china)/gi,'<span class="blockerBody">$1</span>')
                    element.replaceWith(newElement)
                }    
            }   
}