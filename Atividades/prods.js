let prod = []
let vend = []
let rst = []
function QuantProd1(){
    prod[0] = document.getElementById("prod3").value
    vend[0] = document.getElementById("vend3").value
    rst[0] = prod[0] - vend[0]

    prod[1] = document.getElementById("prod1").value
    vend[1] = document.getElementById("vend1").value
    rst[1] = prod[1] - vend[1]

    prod[2] = document.getElementById("prod2").value
    vend[2] = document.getElementById("vend2").value
    rst[2] = prod[2] - vend[2]

    alert("A Quantidade Restante de cada Produto é: "+ rst)
    console.log(rst)
}