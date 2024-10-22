const counterElement = document.getElementById('counter');
let count = 0;

document.getElementById('increment').addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    counterElement.style.color = 'green';
});

document.getElementById('decrement').addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterElement.textContent = count;
        counterElement.style.color = 'red';
    }
});
const trackingBox = document.getElementById('tracking-box');
const coordinatesDisplay = document.getElementById('coordinates');

trackingBox.addEventListener('mousemove', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    coordinatesDisplay.textContent = `x: ${x}, y: ${y}`;
});
const redLight = document.getElementById('red');
const greenLight = document.getElementById('green');
const message = document.getElementById('message');

function resetLights() {
    redLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';
}

function changeLight() {
    const color = prompt("Enter a color").toLowerCase();

    resetLights();

    if (color === 'red') {
        redLight.style.backgroundColor = 'red';
        message.textContent = 'STOP';
    } else if (color === 'green') {
        greenLight.style.backgroundColor = 'green';
        message.textContent = 'GO';
    } else {
        message.textContent = 'Invalid color,please enter Red or Green.';
    }
}

changeLight();

