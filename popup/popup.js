const wrap = document.getElementById('bBwrap')

//send request for jsoned dom
window.onload = () => {
      sendMessage('get')
}

// receive data from content
chrome.runtime.onMessage.addListener((msg)=>{
    for(id in msg.node.childNodes){
        tree(msg.node.childNodes[id], wrap)
    }
})
// create a dom tree 
let tree = (elem, parent) => {
    let newEl = document.createElement('div')
        newEl.id = elem.id
        newEl.classList = 'parent'

    let nameEl = document.createElement('p')
        if(elem.id != undefined) nameEl.innerText = elem.id
        else nameEl.innerText = 'text content'
        nameEl.classList = 'name'

        nameEl.onclick = () => {
            if(nameEl.innerText != 'text content'){
                sendMessage(nameEl.innerText)
                sendMessage('get')
            }
        }

    newEl.appendChild(nameEl)

    // works only when there arent any divs with the same id
    document.getElementById(parent.id).appendChild(newEl)

    if(elem.childNodes.length > 0){
        for(id in elem.childNodes){
            tree(elem.childNodes[id], elem)
        }
    }
}

let sendMessage = (msg) => {
    let qInfo = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(qInfo, getTab)
    function getTab(tabs){
        wrap.innerHTML = ''
        chrome.tabs.sendMessage(tabs[0].id, msg)
    }  
}