function QuantProd1(){
    let proj = document.getElementById("proj").value
    let time = document.getElementById("time").value
    let end = document.getElementById("end")
    let value = []
    let endd = end.checked
    if (endd == true){
        end = "Concluido"
    }else if (endd == false){
        end = "Não concluido"
    }
    value = [proj,time,end]
    alert(value)
    console.log(value)
}