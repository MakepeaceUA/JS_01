let num = prompt("Enter a three-digit number:");
if (num >= 100 && num <= 999) 
{
    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let units = num % 10;

    if (hundreds === tens || hundreds === units || tens === units) 
    {
        alert("There are matching digits.");
    } 
    else 
    {
        alert("All digits are different.");
    }
} 
else 
{
    alert("Error");
}