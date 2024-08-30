let currentInput = '';
let operator = null;
let previousInput = '';
let isOperatorClicked = false;

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.innerText = `${previousInput} ${operator || ''} ${currentInput}`;
    
    // Adjust font size dynamically for both input and output
    adjustFontSize(displayElement);
}

function adjustFontSize(displayElement) {
    const maxFontSize = 2; // in em
    const minFontSize = 0.8; // in em (adjusted for smaller input)
    const maxChars = 10; // maximum characters before scaling down
    
    const contentLength = displayElement.innerText.length;
    const fontSize = Math.max(minFontSize, maxFontSize - 0.1 * (contentLength - maxChars));
    displayElement.style.fontSize = `${fontSize}em`;
}

function appendNumber(number) {
    if (isOperatorClicked) {
        currentInput = number;
        isOperatorClicked = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperation(op) {
    if (operator !== null) {
        calculateResult();
    }
    previousInput = currentInput || '0';
    operator = op;
    currentInput = '';
    isOperatorClicked = true;
    updateDisplay();
}

function calculateResult() {
    if (operator === null || previousInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput || '0');
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput || '0');
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput || '0');
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput || '0');
            break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}
