//alert("index.js");
const res = 0;
let val = res;

function add(){
    val += userInput.value;
    outputResult(val, '');
}

function subtract(){
    val -= userInput.value;
    outputResult(val, '');
}

function multiply(){
    val *= userInput.value;
    outputResult(val, '');
}

function divide(){
    val /= userInput.value;
    outputResult(val, '');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
