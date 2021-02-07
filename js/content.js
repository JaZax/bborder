
chrome.runtime.onMessage.addListener((msg)=>{
    console.log(msg)
})

let body = domJSON.toJSON(document.body)

window.onload = ()=>{
    chrome.runtime.sendMessage(body)
}
