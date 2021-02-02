//console.log(document.body.getElementsByTagName("*"))

let elems = document.body.getElementsByTagName("*");

for(let i = 0; i < elems.length; i++){
    elems[i].addEventListener('click', ()=>{
        elems[i].style.border = "solid red"
    })
}