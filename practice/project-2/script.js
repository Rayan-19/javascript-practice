
const scoreInput = document.getElementById('scoreInput');
const message = document.getElementById('message');
const warning = document.getElementById('warning');

const isValid = (marks) => {
  warning.style.display = 'none';
  if (marks < 0 || marks > 100 || isNaN(marks)) {
    warning.style.display = 'block';
    warning.style.color = 'red';
    isNaN(marks)? warning.innerText = 'Give input': warning.innerText = 'Invalid input';
    isNaN(marks)? warning.innerText = 'Give input': warning.innerText = 'Invalid input';
  }
};

const getMarks = () => {
  return parseFloat(scoreInput.value);
};

const getGrade = (marks) => {
  message.style.display= 'block'

  if (marks < 0 || marks > 100 || isNaN(marks)) {
    message.style.display= 'none'
  }
  marks>50?message.style.color ='black':message.style.color ='red';
  
  if (marks >= 90) {
    message.innerText = 'A+';
  } else if (marks >= 80) {
    message.innerText = 'A-';
  } else if (marks >= 70) {
    message.innerText = 'B';
  } else if (marks >= 60) {
    message.innerText = 'C';
  } else if (marks >= 50) {
    message.innerText = 'D';
  } else {
    message.innerText = 'F';
  }
   
};

const generateGrade = () => {
  const inputValue = getMarks();
  isValid(inputValue);
  getGrade(inputValue);
};

// Event listener for the "Generate" button
document.getElementById('gradeGenerator').addEventListener('click', generateGrade);
