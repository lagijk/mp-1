// get the value of two inputs
//const firstNum = document.getElementById("first-number").value;
//const secondNum = document.getElementById("second-number").value;
//const output = document.getElementById("output");

// addition operation
function addition() {
    // get the value of two inputs
    const firstNum = document.getElementById("first-number").value;
    const secondNum = document.getElementById("second-number").value;
    // convert two input into ints 
    const num1 = Number(firstNum);
    const num2 = Number(secondNum);
    const result = num1 + num2;
    document.getElementById("output").innerHTML=String(result);

    // if result is negative change text color to red
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "";
    }
}
