const colorGenerateBtn = document.getElementById('colorGenerateBtn');
const body = document.querySelector('body');

function generateRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

colorGenerateBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    body.style.backgroundColor=randomColor
    // body.style.setProperty('--color',randomColor) 
});
