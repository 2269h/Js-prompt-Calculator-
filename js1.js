let firstNumber = parseFloat(prompt("add first number"));
let choice = prompt("type in the function you need as 'add', 'subtract', 'multiply', 'divide'");
let secondNumber = parseFloat(prompt("add second number"));
if ( choice =="add" ) {
    alert(firstNumber + secondNumber);
    console.log(firstNumber + secondNumber)
} else if (choice =="subtract") {
    alert (firstNumber - secondNumber);
    console.log(firstNumber - secondNumber)
} else if(choice =="multiply") {
    alert(firstNumber * secondNumber);
    console.log(firstNumber * secondNumber)
} else if(choice == "divide") {
    alert(firstNumber / secondNumber);
    console.log(firstNumber / secondNumber)
} else {alert("invalid input");
}
