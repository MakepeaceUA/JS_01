let age = prompt("Enter your age:");

age = Number(age);

if (age >= 0 && age < 12) 
    {
        alert("You're a child.");
    } 
    else if (age >= 12 && age < 18) 
    {
        alert("You're a teenager.");
    } 
    else if (age >= 18 && age < 60) 
    {
        alert("You're an adult.");
    } 
    else if (age >= 60) 
    {
        alert("You're a pensioner.");
    } 
    else 
    {
        alert("Error");
    }