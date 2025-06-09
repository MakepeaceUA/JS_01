let year = parseInt(prompt("Enter a year:"));
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) 
{
    alert(`${year} is a leap year.`);
} 
else 
{
    alert(`${year} is not a leap year.`);
}