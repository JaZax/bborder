chrome.runtime.onMessage.addListener((msg)=>{
    if(msg == 'elo'){

        document.body.style['background'] = 'pink'

    }
})