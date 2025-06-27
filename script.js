let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const display = document.getElementById("display");
const lapList = document.getElementById("laps");

function updateDisplay() {
  let h = hours.toString().padStart(2, '0');
  let m = minutes.toString().padStart(2, '0');
  let s = seconds.toString().padStart(2, '0');
  let ms = milliseconds.toString().padStart(2, '0');
  display.innerText = `${h}:${m}:${s}.${ms}`;
}

function stopwatch() {
  milliseconds += 1;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds += 1;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  updateDisplay();
}

function start() {
  if (!timer) {
    timer = setInterval(stopwatch, 10); // 10ms = 0.01s
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  lapList.innerHTML = "";
}

function lap() {
  const lapTime = display.innerText;
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(li);
}
