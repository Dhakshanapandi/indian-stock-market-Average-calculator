function getaverage(){
var funit =document.getElementById("funit").value
var sunit =document.getElementById("sunit").value
var fprice =document.getElementById("fprice").value
var sprice =document.getElementById("sprice").value
    if(document.getElementById("funit").value==''){
        document.getElementById("error1").innerHTML ="Units Required"
        return;
    }
    else if(document.getElementById("fprice").value==''){
        document.getElementById("error2").innerHTML ="Price Required"
        return;
    }
    else if(document.getElementById("sunit").value==''){
        document.getElementById("error3").innerHTML ="Units Required"
        return;
    }
    else if(document.getElementById("sprice").value==''){
        document.getElementById("error4").innerHTML ="Price Required"
        return;
    }
    var r1 = (funit*fprice) +(sunit*sprice)
    var r2 = +funit + +sunit
    var result = parseFloat(r1/r2).toFixed(2)
    document.getElementById("totunits").innerHTML = "Total Units:" + r2;
    document.getElementById("avgprice").innerHTML = "Average Price:"+result
    document.getElementById("totamnt").innerHTML = "Total price:"+r1
    return;

}
function clearfields(){
    document.getElementById("funit").value='';
    document.getElementById("sunit").value='';
    document.getElementById("fprice").value='';
    document.getElementById("sprice").value='';
    document.getElementById("totunits").innerText='';
    document.getElementById("totamnt").innerText='';
    document.getElementById("avgprice").innerText='';
    document.getElementById("error1").value = '';
    document.getElementById("error2").value = '';
    document.getElementById("error3").value = '';
    document.getElementById("error4").value = '';

}