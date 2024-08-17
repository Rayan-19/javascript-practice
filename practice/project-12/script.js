const colorContainer=document.querySelector('#container')
const box=document.querySelector('.box')
const generateBtn=document.querySelector('button')

function HexGenerator(color){
  return color.toString(16)
}

function rgbToHex(r,g,b){
 return `#${HexGenerator(r)}${HexGenerator(g)}${HexGenerator(b)}`
}

function generateRandomColor() {
  
  for(let i=0;i<=30;i++){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    const colorBox=document.createElement('div')
    colorBox.classList.add('box')
    colorBox.style.backgroundColor=rgbToHex(red, green, blue);
    colorBox.innerText=rgbToHex(red, green, blue);
    colorContainer.appendChild(colorBox)
  }

}

generateBtn.addEventListener('click',generateRandomColor)


