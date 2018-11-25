words = ["Learner","Thinker","Designer","Coder","Engineer"];
index = -1;
statictime = 2000;
dynamictime = 510;
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
    document.getElementById("scramble").innerHTML = `${words[index]}.`;
    document.getElementById("scramble").classList.remove("hidden");
    setTimeout(wait,dynamictime);
}
wait();