function add() {
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a+b;
    document.getElementById("A2").innerHTML=c;
}
function sub() {
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a-b;

    document.getElementById("A2").innerHTML=c;
}


function mul() {
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a*b;
    document.getElementById("A2").innerHTML=c;
}
function div() {
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a/b;
    document.getElementById("A2").innerHTML=c;
}
function exp() {
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a**b;
    document.getElementById("A2").innerHTML=c;
}
