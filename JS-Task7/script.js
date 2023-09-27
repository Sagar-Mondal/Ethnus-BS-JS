var animationState = {
  running: false,
  position: 0,
  resetRequested: false,
};

const img = document.querySelector("img");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const info = document.querySelector("#info");

startBtn.addEventListener("click", () => {
  animationState.running = true;
});

stopBtn.addEventListener("click", () => {
  animationState.running = false;
});

resetBtn.addEventListener("click", () => {
  animationState.resetRequested = true;
});

setInterval(() => {
  if (animationState.resetRequested) {
    animationState.position = 0;
    animationState.resetRequested = false;
    img.style.left = `${animationState.position}px`;
  }
  if (animationState.running) {
    animationState.position += 10;
    img.style.left = `${animationState.position}px`;
  }
  info.textContent = `Current state: ${
    animationState.running ? "running" : "stopped"
  }, ${animationState.position}px`;
}, 200);
