const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector("#main-button")

//select.addEventListener("change", function(){
    //console.log("troquei de valor)
//})

function troqueiValor(event ){
    console.log(event)

    
}
    input.addEventListener("keypress",troqueiValor)