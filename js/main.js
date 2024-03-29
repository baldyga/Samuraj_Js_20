const endTime = new Date ('2022-12-01 23:00:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval ( () => {
    const nowTime = new Date().getTime();

    const time = endTime - nowTime;
    const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? `0${hours}` : hours;

    const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

    const seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

    spanD.textContent = days;
    spanH.textContent = hours;
    spanS.textContent = minutes;
    spanM.textContent = seconds;
},1000)


