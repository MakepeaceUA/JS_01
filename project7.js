let amount = parseFloat(prompt("Enter amount:"));
let discount = 0;

if (amount >= 200 && amount < 300) 
{
  discount = 0.03;
} 
else if (amount >= 300 && amount < 500) 
{
  discount = 0.05;
} 
else if (amount >= 500) 
{
  discount = 0.07;
}

let finalAmount = amount - (amount * discount);
alert(`Amount after discount: ${finalAmount.toFixed(2)}`);