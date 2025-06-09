let score = 0;

let q1 = prompt("Question 1: What is the capital of France?\nA. Berlin\nB. Madrid\nC. Paris").toUpperCase();
switch (q1) {
  case 'C': score += 2; 
  break;
}

let q2 = prompt("Question 2: What is the capital of USA?\nA. New York\nB. Washington, DC.\nC. Los Angeles").toUpperCase();
switch (q2) 
{
  case 'B': score += 2; 
  break;
}

let q3 = prompt("Question 3: What is the capital of Italy?\nA. Rome\nB. Milan\nC. Naples").toUpperCase();
switch (q3) 
{
  case 'A': score += 2; 
  break;
}

alert(`You scored ${score} points.`);