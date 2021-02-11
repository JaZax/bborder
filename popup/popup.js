const wrap = document.getElementById('wrap')

//send request for jsoned dom
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
        tree(msg.node.childNodes[id], wrap)
    }
})

// create a dom tree 
let tree = (elem, parent) => {
    let newEl = document.createElement('div')
        newEl.id = elem.id
        newEl.innerText = elem.id
        newEl.classList = 'parent'

        // works only when there arent any divs with the same id
        document.getElementById(parent.id).appendChild(newEl)

    if(elem.childNodes.length > 0){
        for(id in elem.childNodes){
            tree(elem.childNodes[id], elem)
        }
    }
}