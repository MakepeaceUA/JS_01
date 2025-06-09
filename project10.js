let day = parseInt(prompt("Enter day:"));
let month = parseInt(prompt("Enter month:"));
let year = parseInt(prompt("Enter year:"));

let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

let daysMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

day++;
if (day > daysMonth[month - 1]) 
{
  day = 1;
  month++;
  if (month > 12) 
  {
    month = 1;
    year++;
  }
}

alert(`Next date is: ${day}.${month}.${year}`);