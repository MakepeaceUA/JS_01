const input = prompt("Enter a number from 0 to 9:");
const num = parseInt(input);

let symbol;

switch (num) {
  case 1:
    symbol = "!";
    break;
  case 2:
    symbol = "@";
    break;
  case 3:
    symbol = "#";
    break;
  case 4:
    symbol = "$";
    break;
  case 5:
    symbol = "%";
    break;
  case 6:
    symbol = "^";
    break;
  case 7:
    symbol = "&";
    break;
  case 8:
    symbol = "*";
    break;
  case 9:
    symbol = "(";
    break;
  case 0:
    symbol = ")";
    break;
  default:
    symbol = "Error";
}
alert(symbol);