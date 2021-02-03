console.log('background is working')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    chrome.tabs.sendMessage(tab.id, "elo")
}