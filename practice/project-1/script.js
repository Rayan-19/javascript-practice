const increment=document.getElementById('incrementButton')
const decrement=document.getElementById('decrementButton')
const countDisplay=document.getElementById('countDisplay')
let count=0;
const increaseCount=()=>{
  count++
  countDisplay.innerText=count;
}
const decreaseCount=()=>{
  count--
  countDisplay.innerText=count;
  countChecker()
  
}
function countChecker(){
  if(count<0){
    alert("Count cannt be less than 0")
    countDisplay.innerText=0;
  }
}




increment.addEventListener('click',increaseCount)
decrement.addEventListener('click',decreaseCount)

