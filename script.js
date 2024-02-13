let night = false

let hourHTML = document.getElementById("hour");
let minHTML = document.getElementById("min");
let secHTML = document.getElementById("sec");
let timezoneHTML = document.getElementById("timezone");
document.getElementById('refresh').addEventListener('click', fetchQuote);
function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  hourHTML.innerText = hours;
  minHTML.innerText = minutes;
  secHTML.innerText = seconds;
  timezoneHTML.innerText = timezone;

  let greeting = 'GOOD MORNING';
  let background = 'night.png';
  if (hours >= 10 && hours < 18) {
    greeting = 'GOOD AFTERNOON';
    document.getElementById('Icon').src = 'src/sun.svg';
  }
  else if (hours >= 18 && hours < 22) {
    greeting = 'GOOD EVENING';
    document.getElementById('Icon').src = 'src/moon.svg';
}
  if (hours >= 6 && hours < 10) {
    background = 'morning.png';
  } else if (hours >= 10 && hours < 20) {
    background = 'afternoon.png';
  }
  
  document.querySelector('body').style.backgroundImage = `url('src/${background}')`;
  document.getElementById('greeting').innerText = greeting + ", Its currently";
}
function fetchQuote() {
  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(quotes => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote').innerText = randomQuote.text;
    });
}

fetchQuote();
setInterval(updateTime, 1000);