const wrap = document.getElementById('wrap')

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
    for(id in msg.node.childNodes){
        //console.log(msg.node.childNodes[id])
        tree(msg.node.childNodes[id])
    }
})

let tree = (elem) => {
    console.log(elem)

    let newEl = document.createElement('div')

        newEl.id = 'Bb' + elem.id
        newEl.innerText = elem.id

        wrap.appendChild(newEl)

    if(elem.childNodes.length > 0){
        for(id in elem.childNodes){
            //console.log(elem.childNodes[id].id)
            tree(elem.childNodes[id])
        }
    }
}