const hour = document.getElementById('hr');
const minute = document.getElementById('mn');
const second = document.getElementById('sc');
let conteinerClock = document.querySelector('.clock');

setInterval(updateClock);

function updateClock() {
    let date = new Date();
    let sec = date.getSeconds();

    let min = date.getMinutes() + sec/60;

    let hr = date.getHours() + min/60 + sec/3600;


    hour.style.transform = `rotate(${hr * 30}deg)`;
    minute.style.transform =`rotate(${min * 6}deg)`;
    second.style.transform = `rotate(${sec * 6}deg)`;
}

for (let i=1; i < 13; i++) {
    const distance = 2* Math.PI*(1/12);
    const radius = 40;
    const angle = (i-3)*distance;
    const x = radius*Math.cos(angle);
    const y = radius*Math.sin(angle);

    let number = document.createElement('div');
    number.classList.add('number');
    number.textContent = `${i}`;
    number.style.left = 50+x+'%';
    number.style.top = 50+y+'%';
    conteinerClock.appendChild(number);   
}