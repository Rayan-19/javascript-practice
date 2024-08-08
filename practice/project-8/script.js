const monthContainer=document.getElementById("monthName")
const dayContainer=document.getElementById("dayName")
const dateContainer=document.getElementById("currentDate")
const yearContainer=document.getElementById("currentYear")

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const currentDate = date.getDate();
const year = date.getFullYear();


dateContainer.innerText=currentDate
monthContainer.innerText=date.toLocaleString('default',{month:'long'})
yearContainer.innerText=year
dayContainer.innerText=date.toLocaleString('default',{weekday:'long'})