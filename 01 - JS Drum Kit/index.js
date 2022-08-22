//? Global variables
const pressedClasses = ["border-yellow-500", "scale-110"];

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio || !key) return;

  audio.currentTime = 0;
  audio.play();

  pressedClasses.forEach((className) => key.classList.add(className));
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  pressedClasses.forEach((className) => this.classList.remove(className));
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
