// const resultSheetsContainer = document.getElementById('resultSheetsContainer');
// const grades = document.getElementById('grades');

// const allStudentsInfo = {
//   students: [
//     { Name: 'RAYAN', Grade: 'A++', Score: 100 },
//     { Name: 'RAFI', Grade: 'A++', Score: 99 },
//     { Name: 'AYAMAN', Grade: 'A+', Score: 95 },
//     { Name: 'ABRAR', Grade: 'A+', Score: 90 },
//     { Name: 'TALHA', Grade: 'A', Score: 89 },
//     { Name: 'RAFAN', Grade: 'A', Score: 81 },
//     { Name: 'FAHIM', Grade: 'B', Score: 75 },
//     { Name: 'TAJWAR', Grade: 'B', Score: 72 },
//     { Name: 'JERY', Grade: 'C', Score: 66 },
//     { Name: 'MULA', Grade: 'C', Score: 63 },
//     { Name: 'SIAM', Grade: 'D', Score: 59 },
//     { Name: 'SHARIAR', Grade: 'D', Score: 51 },
//     { Name: 'REHMAN', Grade: 'F', Score: 21 },
//     { Name: 'ARIN', Grade: 'F', Score: 20 }
//   ]
// };

// const {students}=allStudentsInfo 

// function setScoreSheetContainer(arr = students) {
//   resultSheetsContainer.innerHTML += arr
//     .map(({ Name, Grade, Score}) => `
//     <div id="resultSheet">
//         <h2>Score: ${Score}</h2>
//         <p>Name:${Name}</p>
//         <p>Grade: ${Grade}</p>
//         <p>Message: ${Score >= 50 ? 'YOU PASSED' : 'YOU FAILED'}, ${Score >= 80 ? 'FANTASTIC' : 'WORK HARDER'}</p>
//       </div>`)
//     .join("");
//   }

// function filtreStudents(){
//   if(grades.value=='Grade-A++'){
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Grade=='A++'))
//   }
//   else if(grades.value=='Grade-A+'){
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Grade=='A+'))
//   }
//   else if(grades.value=='Grade-A'){
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Grade=='A'))
//   }
//   else if(grades.value=='Grade-B'){
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Grade=='B'))
//   }
//   else if(grades.value=='Grade-C'){
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Grade=='C'))
//   }
//   else if(grades.value=='Grade-D'){
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Grade=='D'))
//   }
//   else if (grades.value=='Grade-F'){
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Grade=='F'))
//   }
//   else{
//     setScoreSheetContainer(students.sort((a, b) => b.Score - a.Score).filter((student)=>student.Name!==null))
//   }
// }

// grades.addEventListener('change',()=>{
//   resultSheetsContainer.innerHTML=''
//   filtreStudents()
// })

const resultSheetsContainer = document.getElementById('resultSheetsContainer');
const grades = document.getElementById('grades');

const allStudentsInfo = {
  students: [
    { Name: 'RAYAN', Grade: 'A++', Score: 100 },
    { Name: 'RAFI', Grade: 'A++', Score: 99 },
    { Name: 'AYAMAN', Grade: 'A+', Score: 95 },
    { Name: 'ABRAR', Grade: 'A+', Score: 90 },
    { Name: 'TALHA', Grade: 'A', Score: 89 },
    { Name: 'RAFAN', Grade: 'A', Score: 81 },
    { Name: 'FAHIM', Grade: 'B', Score: 75 },
    { Name: 'TAJWAR', Grade: 'B', Score: 72 },
    { Name: 'JERY', Grade: 'C', Score: 66 },
    { Name: 'MULA', Grade: 'C', Score: 63 },
    { Name: 'SIAM', Grade: 'D', Score: 59 },
    { Name: 'SHARIAR', Grade: 'D', Score: 51 },
    { Name: 'REHMAN', Grade: 'F', Score: 21 },
    { Name: 'ARIN', Grade: 'F', Score: 20 }
  ]
};

const { students } = allStudentsInfo;

function setScoreSheetContainer(arr = students) {  
  resultSheetsContainer.innerHTML += arr
    .map(({ Name, Grade, Score }) => `
      <div id="resultSheet">
        <h2>Score: ${Score}</h2>
        <p>Name: ${Name}</p>
        <p>Grade: ${Grade}</p>
        <p>Message: ${Score >= 50 ? 'YOU PASSED' : 'YOU FAILED'}, ${Score >= 80 ? 'FANTASTIC' : 'WORK HARDER'}</p>
      </div>`)
    .join("");
}

function filterAndSortStudents() {
  const grade = grades.value;
  let filteredStudents = grade === 'All' ? students : students.filter(student => student.Grade === grade);
  
  // Sort students by Score in descending order
  filteredStudents.sort((a, b) => b.Score - a.Score);
  
  setScoreSheetContainer(filteredStudents);
}

grades.addEventListener('change', () => {
  resultSheetsContainer.innerHTML = '';
  filterAndSortStudents();
});