
let body = domJSON.toJSON(document.body)

chrome.runtime.onMessage.addListener((msg)=>{
    if(msg == 'get'){
        chrome.runtime.sendMessage(body)
    }else{
        let currentBorder = document.getElementById(msg).style.border

        if(currentBorder != 'solid red')
        {
            document.getElementById(msg).style.border = 'solid red'
        }else{
            document.getElementById(msg).style.border = ''
        }
        // document.getElementById(msg).style.border = 'solid red'

    }
})