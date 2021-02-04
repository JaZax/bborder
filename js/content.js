chrome.runtime.onMessage.addListener((msg)=>{
    console.log(msg)
    if(msg == 'elo'){
        document.body.style['background'] = 'pink'
    }
})