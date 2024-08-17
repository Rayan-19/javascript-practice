const startbtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');
const resetbtn = document.getElementById('resetbtn');
const timeContainer = document.querySelector('.time');

let interval;
let timeLeft = 7200000; // 7200 seconds * 1000 milliseconds

startbtn.addEventListener('click', () => {
    interval = setInterval(updateTimer, 1);
});

stopbtn.addEventListener('click', () => {
    clearInterval(interval);
});

resetbtn.addEventListener('click', () => {
    clearInterval(interval);
    timeLeft = 7200000;
    updateTimer();
});

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(interval);
        alert('Time is up');
        return;
    }

    let hours = Math.floor(timeLeft / 3600000);
    let min = Math.floor((timeLeft % 3600000) / 60000);
    let sec = Math.floor((timeLeft % 60000) / 1000);
    let millisec = timeLeft % 1000;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${millisec.toString().padStart(3, '0')}`;
    timeContainer.innerText = formattedTime;
    timeLeft--;
}

updateTimer();

// const startbtn = document.getElementById('startbtn');
// const stopbtn = document.getElementById('stopbtn');
// const resetbtn = document.getElementById('resetbtn');
// const timeContainer = document.querySelector('.time');

// let interval;
// let timeLeft = 7200;

// startbtn.addEventListener('click', () => {
//     interval = setInterval(updateTimer, 1000);
// });

// stopbtn.addEventListener('click', () => {
//     clearInterval(interval);
// });

// resetbtn.addEventListener('click', () => {
//     clearInterval(interval);
//     timeLeft = 7200;
//     updateTimer();
// });

// function updateTimer() {
//     if (timeLeft <= 0) {
//         clearInterval(interval);
//         alert('Time is up');
//         return;
//     }

//     let hours = Math.floor(timeLeft / 3600);
//     let min = Math.floor((timeLeft % 3600) / 60);
//     let sec = timeLeft % 60;
//     const formattedTime = `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
//     timeContainer.innerText = formattedTime;
//     timeLeft--;
// }

// updateTimer();
