const scoreInput1=document.getElementById('scoreInput1')
const scoreInput2=document.getElementById('scoreInput2')
const message=document.getElementById('message')




function compare() {
  if (scoreInput1.value === scoreInput2.value){
    message.innerText= `${scoreInput1.value} is equal to ${scoreInput2.value}`
  }
  if (scoreInput1.value > scoreInput2.value){
    message.innerText= `${scoreInput1.value} is greater ${scoreInput2.value}`
  }
  if (scoreInput1.value < scoreInput2.value){
    message.innerText= `${scoreInput1.value} is less than ${scoreInput2.value}`
  }
}
gradeGenerator.addEventListener('click',compare)