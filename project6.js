let usd = parseFloat(prompt("Enter amount in USD:"));
let currency = prompt("Enter currency to convert to (EUR, UAN, AZN):").toUpperCase();

let rate;
switch (currency) 
{
    case "EUR":
        rate = 0.90;
        break;
    case "UAN":
        rate = 36.0;
        break;
    case "AZN":
        rate = 1.5;
        break;
}
let converted = usd * rate;
alert(`Converted amount: ${converted.toFixed(2)} ${currency}`);
