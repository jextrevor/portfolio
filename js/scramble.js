words = ["Trevor Jex", "Learner", "Thinker", "Designer", "Coder"];
index = 0;
firsttime = 2000;
statictime = 2500;
dynamictime = 500;
function wait() {
  setTimeout(fadeout, statictime);
}
function fadeout() {
  document.getElementById("scramble").classList.remove("shown");
  document.getElementById("scramble").classList.add("hidden");
  setTimeout(fadein, dynamictime);
}
function fadein() {
  index++;
  if (index >= words.length) {
    index = 0;
  }
  document.getElementById("scramble").innerHTML = words[index];
  document.getElementById("scramble").classList.remove("hidden");
  document.getElementById("scramble").classList.add("shown");
  setTimeout(wait, dynamictime);
}

setTimeout(fadeout, firsttime);