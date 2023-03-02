var a=document.querySelector(".number");
const plus=document.querySelector(".plus-button");
const minus=document.querySelector(".minus-button");
const reset=document.querySelector(".reset-button");

function increment(){
    const value=Number(a.innerHTML);
    a.innerHTML=value+1;
}
function decrement(){
    const value=Number(a.innerHTML);
    if(value>0){
        a.innerHTML=value-1;
    }
    else{
        alert("Negative Value not allowed");
    }
}
function resetToZero(){
    a.innerHTML=0;
}

plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);
reset.addEventListener("click", resetToZero);
