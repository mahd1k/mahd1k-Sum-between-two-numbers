var first = document.getElementById("first")
var seconde = document.getElementById("seconde")
var total = document.getElementById("total")
var result = document.getElementById("result")

total.onclick = function(){

    var aval = Number(first.value)
    var dovom = Number(seconde.value)
    var hasel = 0

    while(aval <= dovom){
        hasel+=aval
        aval++
    }
    result.innerText = hasel
}
