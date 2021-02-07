const wrap = document.getElementById('wrap')

document.body.addEventListener('click', ()=>{
    let qInfo = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(qInfo, getTab)

    function getTab(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 'from ext')
    }    
})

chrome.runtime.onMessage.addListener((msg)=>{

    for(id in msg.node.childNodes){

        //console.log(msg.node.childNodes[id])
        abc(msg.node.childNodes[id])

    }
    
})

let abc = (elem) => {

    //console.log(elem.id)

    let newEl = document.createElement('div')

        newEl.id = 'Bb' + elem.id
        newEl.innerText = elem.id

        wrap.appendChild(newEl)

    if(elem.childNodes.length > 0){

        console.log(elem.id)

        //console.log('elo')

        for(id in elem.childNodes){

            //console.log(elem.childNodes[id].id)

            abc(elem.childNodes[id])
        }
    }

}