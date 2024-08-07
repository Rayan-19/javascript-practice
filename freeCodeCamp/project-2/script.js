const scoreInput=document.getElementById('scoreInput');
const output=document.getElementById('output');
const generateGradeBtn=document.getElementById('generateGradeBtn');
const allScores=[92, 88, 12, 77, 57, 100, 67, 38, 74]

function getTotal(scoresArr){
   const sum=scoresArr.reduce((first,second)=>first+second);
   return sum;
}
function getAverage(scoreArr){
  const total=getTotal(scoreArr)
  return total/scoreArr.length;
}
function getGrades(score){
  if (score >= 90 && score <= 100) {
    return "A++";
  } else if (score >= 80 && score < 90) {
    return "A";
  } else if (score >= 70 && score < 80) {
    return "B";
  } else if (score >= 60 && score < 70) {
    return "C";
  } else if (score >= 50 && score < 60) {
    return "D";
  } else if (score >= 0 && score < 50) {
    return "F";
  } else {
    return "Invalid Marks";
  }
}

function studentMsg(totalScores=allScores, studentScore=scoreInput.value) {
  if(getGrades(scoreInput.value) !== "Invalid Marks"){
    return `Class average: ${getAverage(totalScores)}. Your grade:${getGrades(studentScore)} ${getGrades(studentScore)!=="F"? 'You passed the course':'You failed the course.'}`
  }
  
  else{
    return `Class average: ${getAverage(totalScores)}. Your grade:N/A.`
  }
  
 
}

generateGradeBtn.addEventListener('click',()=>{
  output.innerText=studentMsg()
})

