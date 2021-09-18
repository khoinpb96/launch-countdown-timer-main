const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
let days = 14;
let hours = 24;
let minutes = 60;
let seconds = 60;

function render() {
  day.innerHTML = `${days - 1} <div class="overlay"></div>`;
  hour.innerHTML = `${hours - 1} <div class="overlay"></div>`;
  minute.innerHTML = `${minutes - 1} <div class="overlay"></div>`;
  second.innerHTML = `${seconds - 1} <div class="overlay"></div>`;
}
function renderDays() {
  days--;
  day.innerHTML = `${days} <div class="overlay"></div>`;
  if (days === 0) days = 13;
}
function renderHours() {
  hours--;
  hour.innerHTML = `${hours} <div class="overlay"></div>`;
  if (hours === 0) hours = 23;
}
function renderMinutes() {
  minutes--;
  minute.innerHTML = `${minutes} <div class="overlay"></div>`;
  if (minutes === 0) minutes = 60;
}
function renderSeconds() {
  seconds--;
  second.innerHTML = `${seconds} <div class="overlay"></div>`;
  if (seconds === 0) seconds = 59;
}
render();
setInterval(renderDays, 24 * 60 * 60 * 1000);
setInterval(renderHours, 60 * 60 * 1000);
setInterval(renderMinutes, 60 * 1000);
setInterval(renderSeconds, 1000);
