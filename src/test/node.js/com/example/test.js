const Calculator = require('./calculator');
const assert = require('assert');

const calc = new Calculator();

try {
    // Test addition
    assert.strictEqual(calc.add(2, 3), 5, '2 + 3 should equal 5');
    console.log('Addition test passed.');

    // Test subtraction
    assert.strictEqual(calc.subtract(5, 3), 2, '5 - 3 should equal 2');
    console.log('Subtraction test passed.');

    // Test multiplication
    assert.strictEqual(calc.multiply(4, 3), 12, '4 * 3 should equal 12');
    console.log('Multiplication test passed.');

    // Test division
    assert.strictEqual(calc.divide(10, 2), 5, '10 / 2 should equal 5');
    console.log('Division test passed.');

    // Test division by zero
    try {
        calc.divide(10, 0);
    } catch (error) {
        assert.strictEqual(error.message, 'Division by zero is not allowed.');
        console.log('Division by zero test passed.');
    }
} catch (error) {
    console.error(`Test failed: ${error.message}`);
}
