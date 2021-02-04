document.body.addEventListener('click', ()=>{

    let qInfo = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(qInfo, getTab)

    function getTab(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 'elo')
    }
    
})