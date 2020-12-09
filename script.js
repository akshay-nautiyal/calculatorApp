var result=document.getElementById('result');
function dis(e){
    result.value=result.value+e
}

function solve(){
let x=result.value;
let y=eval(x);
result.value=y
}

function clr(){
    result.value=''
}