//countdown in JavaScript is code based on tutorial from W3school tuorial here: https://www.w3schools.com/howto/howto_js_countdown.asp 1/6/2023//

const targetDate = new Date("2023-08-25T18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    "It's happening: " + days + " days  " + hours + "h " + minutes + "m " + seconds + "s";

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "today";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);