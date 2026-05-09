const eventDate = new Date("Aug 23, 2026 08:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown(){
    const now = new Date().getTime();
    const distance = eventDate - now;

    if(distance < 0){
        daysEl.innerHTML = 0;
        hoursEl.innerHTML = 0;
        minutesEl.innerHTML = 0;
        secondsEl.innerHTML = 0;
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const sheetID = "1GUo--zCxcX6C5Lri5EcBACZvBVXz79a97g63Biyd7lI";

const url = `https://opensheet.elk.sh/${sheetID}/Form Responses 1`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        document.getElementById("participantCount").innerText = data.length;
    })
    .catch(err => console.log(err));
