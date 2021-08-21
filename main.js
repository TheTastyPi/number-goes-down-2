var number = 10;
var lastFrame = 0;
function numberGoesDown() {
  if (number <= 25 && number >= 1) {
    number--;
  }
}
function nextFrame(timeStamp) {
  let dt = timeStamp - lastFrame;
  lastFrame = timeStamp;
  number += dt/1000;
  if (number > 25) {
    document.getElementById("number").innerText = "You lose"
  } else document.getElementById("number").innerText = number;
  window.requestAnimationFrame(nextFrame);
}
window.requestAnimationFrame(nextFrame);
