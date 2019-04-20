words = ["Trevor Jex","Learner","Thinker","Designer","Coder"];
index = 0;
statictime = 2000;
dynamictime = 500;
function wait(){
    setTimeout(fadeout,statictime);
}
function fadeout(){
    document.getElementById("scramble").classList.add("hidden");
    setTimeout(fadein,dynamictime);
}
function fadein(){
    index++;
    if(index >= words.length){
        index = 0;
    }
    document.getElementById("scramble").innerHTML = words[index];
    document.getElementById("scramble").classList.remove("hidden");
    setTimeout(wait,dynamictime);
}
wait();