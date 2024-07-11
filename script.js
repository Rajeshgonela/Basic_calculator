document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let operator = '';
    let operand1 = '';
    let operand2 = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === null) {
                if (button.id === 'clear') {
                    currentInput = '0';
                    operator = '';
                    operand1 = '';
                    operand2 = '';
                    result = '';
                    display.textContent = currentInput;
                } else if (button.id === 'backspace') {
                    currentInput = currentInput.slice(0, -1) || '0';
                    display.textContent = currentInput;
                } else if (button.id === 'equals') {
                    operand2 = currentInput;
                    try {
                        result = eval(`${operand1} ${operator} ${operand2}`);
                        display.textContent = result;
                        currentInput = result;
                    } catch (error) {
                        display.textContent = 'Error';
                    }
                    operand1 = '';
                    operand2 = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                operand1 = currentInput;
                operator = value;
                currentInput = '0';
            } else {
                if (currentInput === '0') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                display.textContent = currentInput;
            }
        });
    });
});
