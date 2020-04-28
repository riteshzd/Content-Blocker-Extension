const wordList = ['china','wuhan','dead','virus']
contentBlocker(document.body)

function contentBlocker(element) {
    if(element.hasChildNodes()){
        element.childNodes.forEach(contentBlocker)
    } else if(element.nodeType === Text.TEXT_NODE){

                for(var i=0;i<wordList.length;i++){
                    var dynamicRegExp = new RegExp(wordList[i],"gi")

                    if(element.textContent.match(dynamicRegExp)){
                        const newElement = document.createElement("span")
                        newElement.innerHTML = element.textContent.replace(dynamicRegExp,'<span class="blockerBody">$1</span>')
                        element.replaceWith(newElement)
                    }  
                }
                  
            }   
}