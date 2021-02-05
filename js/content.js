
chrome.runtime.onMessage.addListener((msg)=>{
    console.log(msg)
})

let body = domJSON.toJSON(document.body)

document.body.addEventListener('click', ()=>{
    chrome.runtime.sendMessage(body)
})
