console.log('background is working')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    console.log(tab)
}