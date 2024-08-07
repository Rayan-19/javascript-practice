const input=document.getElementById('number')
const convertBtn=document.getElementById('convert-btn')
const output=document.getElementById('output')

// const romanNumerals=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
// const arabicnumerals=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
// const generateRomanNumber=()=>{
//   let result='' 
//     for(let i=0;i<=romanNumerals.length;i++){
//       while(input.value >= arabicnumerals[i]){
//         input.value-=arabicnumerals[i]
//         result+=romanNumerals[i]
//       }
//     }
  
//   output.innerText=result
  
// }
const numerals=[
  ['M',1000],
  ['CM',900],
  ['D',500],
  ['CD',400],
  ['C',100],
  ['XC',90],
  ['L',50],
  ['XL',40],
  ['X',10],
  ['IX',9],
  ['V',5],
  ['IV',4],
  ['I',1],
]
const generateRomanNumber=()=>{
    let result='' 
      
       for(let [romanNumerals,arabicnumerals] of numerals){
        while(input.value >= arabicnumerals){
                  input.value-=arabicnumerals
                  result+=romanNumerals
                }
        
      }
    
    output.innerText=result
    
  }
input.addEventListener('keydown',(e)=>{
  if (e.key==="Enter") {
    convertBtn.click()
  }
})

convertBtn.addEventListener('click',()=>{
  if(input.value==''){
    output.innerText="Please enter a valid number"
  }
  else if(input.value < 1){
    output.innerText="Please enter a number greater than or equal to 1"
  }
  else if(input.value >3999){
    output.innerText="Please enter a number less than or equal to 3999"
  }
  else{
    generateRomanNumber()
  }
})