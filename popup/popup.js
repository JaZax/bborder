const wrap = document.getElementById('wrap')
let body

window.onload = () => {
    let qInfo = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(qInfo, getTab)

    function getTab(tabs){
        wrap.innerHTML = ''

        chrome.tabs.sendMessage(tabs[0].id, 'get')
    }    
}

// receive data from content
chrome.runtime.onMessage.addListener((msg)=>{

    // body = domJSON.toDOM(msg)
    // document.body.appendChild(body)

    for(id in msg.node.childNodes){
        //console.log(msg.node.childNodes[id])
        tree(msg.node.childNodes[id], wrap)
    }

})

let tree = (elem, parent) => {
    let newEl = document.createElement('div')
        newEl.id = elem.id
        newEl.innerText = elem.id

        document.getElementById(parent.id).appendChild(newEl)

    if(elem.childNodes.length > 0){
        for(id in elem.childNodes){
            //console.log(elem.childNodes[id].id)
            console.log(elem.id)
            tree(elem.childNodes[id], elem)
        }
    }
}