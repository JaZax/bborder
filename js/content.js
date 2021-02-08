
let body = domJSON.toJSON(document.body)

chrome.runtime.onMessage.addListener((msg)=>{
    console.log(msg)

    if(msg == 'get'){
        chrome.runtime.sendMessage(body)
    }
})