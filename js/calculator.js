(function(){
"use strict";

    var leftOperand = document.getElementById("leftOperand");
    var rightOperand = document.getElementById("rightOperand");
    var midInput = document.getElementById("midInput");

    var wasOperatorUsed = false;

    var leftDeciCheck = false;
    var rightDeciCheck = false;

    // inputting number into boxes
    var digitInput = function(event) {
        var num = this.innerHTML;
        // if operator has not been used, go to left box
        if (wasOperatorUsed == false) {
            leftOperand.value += num;
        } else {
        // if it has been used, go to right box
            rightOperand.value += num;
        } 
    }

    // getting each number value and adding click ability
    var digits = document.getElementsByClassName("digit");

    for (var i = 0; i < digits.length; i++) { 
        digits[i].addEventListener("click", digitInput);
    }

    //to add decimal to box, checking if already there or no
    var decimal = document.getElementById("decimal");
    decimal.addEventListener("click", function() {
        if (wasOperatorUsed == false && leftDeciCheck == false) {
            document.getElementById("leftOperand").value += this.innerHTML;
            leftDeciCheck = true;
        } else if (wasOperatorUsed == true && rightDeciCheck ==false) {
            document.getElementById("rightOperand").value += this.innerHTML;
            rightDeciCheck = true;
        }
    });

    // inputting operator into mid box with check for box switching
    var opInput = function(event) {
        midInput.value = this.innerHTML
        wasOperatorUsed = true;
    }

    // getting each operator value
    var operators = document.getElementsByClassName("operator");

    for (var i = 0; i < operators.length; i++) { 
        operators[i].addEventListener("click", opInput);
    }

    // to do arithmetic, equals
    var equate = document.getElementById("opEquals");
    var opEqual = function(event) {
        var leftNum = parseFloat(leftOperand.value);
        var rightNum = parseFloat(rightOperand.value);
        var result;
        var operator = midInput.value;
        switch (operator) {
            case "+":
                result = (leftNum + rightNum);
                break;
            case "-":
                result = (leftNum - rightNum);
                break;
            case "*":
                result = (leftNum * rightNum);
                break;
            case "/":
                result = (leftNum / rightNum);
                break;
            default:
                result = ("Err0r");
        }
        clearDisplay();
        leftOperand.value = result.toFixed(2);
    }

    // assigning click event to equals sign, needs to go after opEquals is defined
    equate.addEventListener("click", opEqual);

    // getting C value 
    var clear = document.getElementById("opClear");

    // to actually clear display
    var clearDisplay = function(event) {
        leftOperand.value = "";
        rightOperand.value = "";
        midInput.value = "";
        wasOperatorUsed = false;
        rightDeciCheck = false;
        leftDeciCheck = false;
    }

    // assigns click event to C button, needs to go after clearDisplay is defined
    clear.addEventListener("click", clearDisplay);

})(); 