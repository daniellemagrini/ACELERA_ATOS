
let counterSeconds = 0;
let counterMinutes = 0;
let paused = false;

setInterval(myTime, 1000);

function myTime() {
  const d = new Date();
  document.getElementById("currentTime").innerHTML = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function timer() {
  if (counterSeconds < 60) { 
      document.getElementById("timerSeconds").innerText = (counterSeconds++).toString().padStart(2, '0');
  };
  
  if (counterSeconds == 60) {
    counterSeconds = 0;
    counterMinutes++;
    document.getElementById("timerSeconds").innerText = (counterSeconds++).toString().padStart(2, '0');
    document.getElementById("timerMinutes").innerText = (counterMinutes).toString().padStart(2, '0');
  }

  if (paused == true) {
    document.getElementById("timerSeconds").innerText = counterSeconds.toString().padStart(2, '0');
    document.getElementById("timerMinutes").innerText = counterMinutes.toString().padStart(2, '0');
  }
}

function start() {
  paused = true;
  setInterval(timer, 1000); 
  document.getElementById("btContinuar").disabled = true;
}

document.getElementById("btContinuar").addEventListener("click", start);
document.getElementById("btResetar").addEventListener("click", reset);
document.getElementById("btPausar").addEventListener("click", pause);

function reset() {
  counterSeconds = 0;
  counterMinutes = 0;
  document.getElementById("timerSeconds").innerText = counterSeconds.toString().padStart(2, '0');
  document.getElementById("timerMinutes").innerText = counterMinutes.toString().padStart(2, '0');
}

function pause() {
  document.getElementById("btContinuar").disabled = false;
  document.getElementById("btPausar").disabled = true;
  paused = true;
}

