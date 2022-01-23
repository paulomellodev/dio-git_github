const body = document.getElementsByTagName("body")[0];

const container = document.createElement("div");
container.classList.add("container");

let hour = 0;
let minute = "0";
let second = "0";

const formatTime = () => {
  if (parseInt(minute) < 10) {
    minute = "0" + parseInt(minute);
  }
  if (parseInt(second) < 10) {
    second = "0" + second;
  }
  return `${hour}:${minute}:${second}`;
};

const display = document.createElement("div");
display.classList.add("display");
display.innerText = formatTime();

const btnStart = document.createElement("button");
btnStart.innerText = "Start";
const btnStop = document.createElement("button");
btnStop.innerText = "Stop";

container.appendChild(display);
container.appendChild(btnStart);
container.appendChild(btnStop);

body.appendChild(container);

let timer;

const startTimer = () => {
  timer = setInterval(() => {
    second = parseInt(second) + 1;
    if (second > 59) {
      minute = `${parseInt(minute) + 1}`;
      second = "0";
      if (minute > 59) {
        hour += 1;
        minute = 0;
      }
    }
    display.innerText = formatTime();
    btnStart.disabled = true;
  }, 1000);
};

btnStart.addEventListener("click", () => startTimer());

btnStop.addEventListener("click", () => {
  clearInterval(timer);
  btnStart.disabled = false;
});
