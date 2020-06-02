let firstOperand = "";
let secondOperand = "";
let result = "";
let operator = "";
let decimal = false;
let cpyValue ="";


function numericPress(value){
    if(result){
        firstOperand = value;
        result = "";
    } else {
        if (value ==="."){
            if (decimal == false){
                firstOperand += value;
                decimal = true;
            } 
        } else {
            firstOperand += value;
        }    
    
    }

    document.getElementById("entry").value = firstOperand;

}


function operatorPress(operatorInput){
    if(!result){
        secondOperand = firstOperand;
    } else {
        secondOperand = result;
    }

    firstOperand = "";
    decimal = false;
    operator = operatorInput;
    result = "";
    document.getElementById("entry").value = operator;

}


function equalPress(){

    decimal = false;
 

    secondOperand = parseFloat(secondOperand);
    firstOperand = parseFloat(firstOperand);
 

    switch(operator){
        case "+":
            result = secondOperand + firstOperand;
            break;
        case "-":
            result = secondOperand - firstOperand;
            break;
        case "*":
            result = secondOperand * firstOperand;
            break;
        case "/":
            result = secondOperand / firstOperand;
            break;
        default:
            result = firstOperand;
    }
    // secondOperand = result;
    document.getElementById("entry").value = result;

    
}


function clearPress(){
    firstOperand = "";
    secondOperand = "";
    result = "";
    operator = "";
    decimal = "";

    document.getElementById("entry").value = "0";
}


function copyValue(){

    cpyValue =  document.getElementById("entry").value;
}

function pasteValue(){

   
    if(cpyValue){
        document.getElementById("entry").value = cpyValue;
        firstOperand = cpyValue;
    }
}