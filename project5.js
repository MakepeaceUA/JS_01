let fiveDigit = prompt("Enter a five-digit number:");
if (fiveDigit.length === 5) 
{
    let isPalindrome = (fiveDigit[0] === fiveDigit[4]) && (fiveDigit[1] === fiveDigit[3]);
    if (isPalindrome) 
    {
        alert("It is a palindrome.");
    } 
    else 
    {
        alert("It is not a palindrome.");
    }
} 
else 
{
    alert("Error");
}