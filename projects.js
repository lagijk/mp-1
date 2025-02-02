// global variable of two inputs
const firstNum = document.getElementById("first-number");
const secondNum = document.getElementById("second-number");
// global variable of output
const output = document.getElementById("output");

// addition operation
function addition() {
    // convert two input into ints 
    const num1 = Number(firstNum.value);
    const num2 = Number(secondNum.value);
    //calculate and display result
    const result = num1 + num2;
    output.innerHTML=String(result);

    // if result is negative change text color to red
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}

// subtraction operator
function subtraction() {
    // convert two input into ints 
    const num1 = Number(firstNum.value);
    const num2 = Number(secondNum.value);
    //calculate and display result
    const result = num1 - num2;
    output.innerHTML=String(result);

    // if result is negative change text color to red
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}

// multiplication operator
function multiply() {
    // convert two input into ints 
    const num1 = Number(firstNum.value);
    const num2 = Number(secondNum.value);
    //calculate and display result
    const result = num1 * num2;
    output.innerHTML=String(result);

    // if result is negative change text color to red
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}

// division operator
function division() {
    // convert two input into ints 
    const num1 = Number(firstNum.value);
    const num2 = Number(secondNum.value);

    // if second number is 0 show division by 0 error
    if (num2 === 0) {
        output.innerHTML = "Error: Division By Zero";
        return;
    }

    //calculate and display result
    const result = num1 / num2;
    output.innerHTML=String(result);

    // if result is negative change text color to red
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}

// exponent operator
function exponent() {
    // convert two input into ints 
    const num1 = Number(firstNum.value);
    const num2 = Number(secondNum.value);

    //calculate and display result of power operator using for loop
    let result = 1; //set result to 1 for 0 exponent
    //use Math.abs() to make sure negative exponent can be calculated
    for (i = 0; i < Math.abs(num2); i++) {
        result *= num1;
    }
    // calculate reciprocal for negative exponent
    if (num2 < 0) {
        result = 1 / result;
    }
    output.innerHTML=String(result);

    // if result is negative change text color to red
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}

// clear operator
function clearAll() {
    firstNum.value = "";
    secondNum.value = "";
    output.innerHTML = "";
}