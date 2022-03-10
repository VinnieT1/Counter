function reset(){
    document.getElementById("counter").innerText = "0";
    updateColor();
}

function decrease(){
    let val = document.getElementById("counter").innerText;
    val = parseInt(val);
    val--;
    document.getElementById("counter").innerText = val;
    updateColor();
}

function increase(){
    let val = document.getElementById("counter").innerText;
    document.getElementById("counter").innerText = ((val-'0')+1)+'';
    updateColor();
}

function updateColor(){
    let val = parseInt(document.getElementById("counter").innerText);
    if (val > 0){
        document.getElementById("counter").style.color="green";
    }
    else if (val < 0){
        document.getElementById("counter").style.color="red";
    }
    else{
        document.getElementById("counter").style.color="black";
    }
}