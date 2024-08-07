// PROCESS 1

const inputNumber=document.getElementById('numberInput')
const generateTableBtn=document.getElementById('generateTableBtn')
const table = document.getElementById('tableBody');


// const generateTable = (inputValue) => {
   
//     table.innerHTML = '';
  
//     for (let i = 1; i <= 10; i++) {
//       const row = generateRows(inputValue, i);
//       table.appendChild(row);
//     }
// };

// const generateRows = (inputValue, i) => {
//   const cell1 = document.createElement('td');
//   const cell2 = document.createElement('td');
//   const cell3 = document.createElement('td');
//   const cell4 = document.createElement('td');
//   const cell5 = document.createElement('td');

//   cell1.innerText = inputValue;
//   cell2.innerText = ' x ' ;
//   cell3.innerText = i;
//   cell4.innerText = ' = ';
//   cell5.innerText = ` ${inputValue *i} `;

//   const row = document.createElement('tr');
//   row.appendChild(cell1);
//   row.appendChild(cell2);
//   row.appendChild(cell3);
//   row.appendChild(cell4);
//   row.appendChild(cell5);

//   return row;
// };

// generateTableBtn.addEventListener('click', function () {
//   const inputValue = parseInt(inputNumber.value);
//   generateTable(inputValue);
// });



// PROCESS 2

// Generate a single row for the multiplication table
// const generateRow = (inputValue, i) => {
//     const createCell = (text) => {
//         const cell = document.createElement('td');
//         cell.innerText = text;
//         return cell;
//     };

//     const row = document.createElement('tr');
//     row.appendChild(createCell(inputValue));
//     row.appendChild(createCell('x'));
//     row.appendChild(createCell(i));
//     row.appendChild(createCell('='));
//     row.appendChild(createCell(inputValue * i));

//     return row;
// };

// Generate the entire table
// const generateTable = () => {
//     const inputValue = parseInt(inputNumber.value);
//     table.innerHTML = '';

//     for (let i = 1; i <= 10; i++) {
//         const row = generateRow(inputValue, i);
//         table.appendChild(row);
//     }
// };

// Event listener for button click
// generateTableBtn.addEventListener('click', generateTable);



// PROCESS 3

// const generateTable = (inputValue) => {
   
//       table.innerHTML = '';
      
//       for (let i = 1; i <= 10; i++) {
//         const row = document.createElement('tr');
//        [inputValue,'x',i,'=',inputValue*i].forEach(element =>{
//           const cell=document.createElement('td')
//           cell.innerText=element
//           row.appendChild(cell)
//         })
        
//         table.appendChild(row)
//       }
//   };

// generateTableBtn.addEventListener('click', function () {
//   const inputValue = parseInt(inputNumber.value);
//   generateTable(inputValue);
// });

