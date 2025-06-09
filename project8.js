let circleLength = parseFloat(prompt("Enter the circumference of the circle:"));
let squarePerimeter = parseFloat(prompt("Enter the perimeter of the square:"));

let circleDiameter = circleLength / Math.PI;
let squareSide = squarePerimeter / 4;

if (circleDiameter <= squareSide) 
{
  alert("The circle can fit inside the square.");
} 
else 
{
  alert("The circle cannot fit inside the square.");
}