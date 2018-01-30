var name = prompt("Hello, enter your name: ");
alert ("hello, " + name);

var choice = prompt("To begin using the calculator please select either (1)for basic use or (2)for advanced use");

//asking for user input
if (choice == "1") {
alert ("You have selected the basics");
}else if (choice == "2") {
  alert ("You have selected advanced");
}

var num1 = prompt("Enter the first number: ");
alert ("You entered " + num1);
var first_num = num1;

var symbol = prompt("Enter symbol: +, -, /, * ");
alert ("You entered " + symbol);
var equation = symbol;

var num2 = prompt("Enter the second number: ");
alert ("You entered " + num2);
var second_num = num2;

var answer = parseInt(first_num) + parseInt(second_num);





alert("The answer is: " + answer );


//var answer = num1 + symbol + num2;
//alert ("The answer is " + answer)
//console.log(answer);
