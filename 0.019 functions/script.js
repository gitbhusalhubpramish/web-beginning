// Global variables for demonstration
let globalVar = "I'm accessible everywhere!";

// 1. Basic greeting function
function basicGreeting() {
    const output = document.getElementById('greeting-output');
    const message = "Hello! Welcome to JavaScript Functions! 👋";
    
    output.innerHTML = message;
    output.className = 'output success animate-in';
    
    return message;
}

// 2. Personal greeting with parameter
function personalGreeting(name) {
    return "Hello " + name + "! Welcome to our site! 🎉";
}

function personalGreeting() {
    const output = document.getElementById('personal-output');
    const nameInput = document.getElementById('userName');
    const name = nameInput.value.trim();
    
    if (name === '') {
        output.innerHTML = "❌ Please enter your name first!";
        output.className = 'output error animate-in';
        return;
    }
    
    const message = personalGreeting(name);
    output.innerHTML = message;
    output.className = 'output success animate-in';
}

// 3. GST calculation function
function calculateGSTAmount(price, gstRate) {
    const gstAmount = (price * gstRate) / 100;
    const totalPrice = price + gstAmount;
    return {
        originalPrice: price,
        gstAmount: gstAmount.toFixed(2),
        totalPrice: totalPrice.toFixed(2)
    };
}

function calculateGST() {
    const output = document.getElementById('gst-output');
    const priceInput = document.getElementById('price');
    const gstRateInput = document.getElementById('gstRate');
    
    const price = parseFloat(priceInput.value);
    const gstRate = parseFloat(gstRateInput.value);
    
    if (isNaN(price) || isNaN(gstRate) || price <= 0 || gstRate < 0) {
        output.innerHTML = "❌ Please enter valid numbers for price and GST rate!";
        output.className = 'output error animate-in';
        return;
    }
    
    const result = calculateGSTAmount(price, gstRate);
    
    const message = `
        <strong>GST Calculation Results:</strong><br>
        📦 Original Price: Rs ${result.originalPrice}<br>
        💰 GST Amount (${gstRate}%): Rs ${result.gstAmount}<br>
        🏷️ <strong>Total Price: Rs ${result.totalPrice}</strong>
    `;
    
    output.innerHTML = message;
    output.className = 'output success animate-in highlight';
}

// 4. Arrow functions demonstration
const square = (x) => x * x;
const double = (x) => x * 2;
const quickGreet = (name) => `Hi ${name}! 👋`;

function testArrowFunctions() {
    const output = document.getElementById('arrow-output');
    const numberInput = document.getElementById('number');
    const num = parseFloat(numberInput.value);
    
    if (isNaN(num)) {
        output.innerHTML = "❌ Please enter a valid number!";
        output.className = 'output error animate-in';
        return;
    }
    
    const squared = square(num);
    const doubled = double(num);
    const greeting = quickGreet(`Number ${num}`);
    
    const message = `
        <strong>Arrow Function Results:</strong><br>
        🔢 Original Number: ${num}<br>
        📈 Squared (${num}²): ${squared}<br>
        ✖️ Doubled (${num} × 2): ${doubled}<br>
        👋 Greeting: ${greeting}
    `;
    
    output.innerHTML = message;
    output.className = 'output success animate-in';
}

// 5. Voting eligibility checker
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "✅ You can vote!";
    } else {
        return `❌ You cannot vote yet. Wait ${18 - age} more years.`;
    }
}

function checkVotingEligibility() {
    const output = document.getElementById('voting-output');
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    
    if (isNaN(age) || age < 0 || age > 150) {
        output.innerHTML = "❌ Please enter a valid age (0-150)!";
        output.className = 'output error animate-in';
        return;
    }
    
    const result = checkVotingEligibility(age);
    const className = age >= 18 ? 'output success animate-in' : 'output warning animate-in';
    
    output.innerHTML = `
        <strong>Voting Eligibility Check:</strong><br>
        👤 Age: ${age} years<br>
        🗳️ Status: ${result}
    `;
    output.className = className;
}

// 6. Temperature conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertCelsiusToFahrenheit() {
    const output = document.getElementById('temp-output');
    const tempInput = document.getElementById('temperature');
    const celsius = parseFloat(tempInput.value);
    
    if (isNaN(celsius)) {
        output.innerHTML = "❌ Please enter a valid temperature!";
        output.className = 'output error animate-in';
        return;
    }
    
    const fahrenheit = celsiusToFahrenheit(celsius);
    
    output.innerHTML = `
        <strong>Temperature Conversion:</strong><br>
        🌡️ ${celsius}°C = ${fahrenheit.toFixed(1)}°F
    `;
    output.className = 'output success animate-in';
}

function convertFahrenheitToCelsius() {
    const output = document.getElementById('temp-output');
    const tempInput = document.getElementById('temperature');
    const fahrenheit = parseFloat(tempInput.value);
    
    if (isNaN(fahrenheit)) {
        output.innerHTML = "❌ Please enter a valid temperature!";
        output.className = 'output error animate-in';
        return;
    }
    
    const celsius = fahrenheitToCelsius(fahrenheit);
    
    output.innerHTML = `
        <strong>Temperature Conversion:</strong><br>
        🌡️ ${fahrenheit}°F = ${celsius.toFixed(1)}°C
    `;
    output.className = 'output success animate-in';
}

// 7. EMI Calculator function
function calculateEMIAmount(principal, rate, years) {
    const monthlyRate = rate / (12 * 100);
    const months = years * 12;
    
    if (monthlyRate === 0) {
        return principal / months; // Simple division for 0% interest
    }
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return emi;
}

function calculateEMI() {
    const output = document.getElementById('emi-output');
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const years = parseFloat(yearsInput.value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(years) || 
        principal <= 0 || rate < 0 || years <= 0) {
        output.innerHTML = "❌ Please enter valid positive numbers for all fields!";
        output.className = 'output error animate-in';
        return;
    }
    
    const emi = calculateEMIAmount(principal, rate, years);
    const totalAmount = emi * years * 12;
    const totalInterest = totalAmount - principal;
    
    const message = `
        <strong>EMI Calculation Results:</strong><br>
        💵 Loan Amount: Rs ${principal.toLocaleString()}<br>
        📊 Interest Rate: ${rate}% per year<br>
        ⏰ Loan Tenure: ${years} years (${years * 12} months)<br>
        💳 <strong>Monthly EMI: Rs ${Math.round(emi).toLocaleString()}</strong><br>
        💰 Total Amount: Rs ${Math.round(totalAmount).toLocaleString()}<br>
        📈 Total Interest: Rs ${Math.round(totalInterest).toLocaleString()}
    `;
    
    output.innerHTML = message;
    output.className = 'output success animate-in highlight';
}

// 8. Function scope demonstration
function demonstrateScope() {
    let localVar = "I'm only available inside this function!";
    
    return {
        global: globalVar,
        local: localVar
    };
}

function demonstrateScope() {
    const output = document.getElementById('scope-output');
    
    // Demonstrate local variable
    let localVar = "I'm only available inside this function!";
    
    const message = `
        <strong>Variable Scope Demonstration:</strong><br>
        🌍 Global Variable: "${globalVar}"<br>
        🏠 Local Variable: "${localVar}"<br>
        <br>
        ℹ️ <em>The global variable can be accessed anywhere, but the local variable only exists inside this function!</em>
    `;
    
    output.innerHTML = message;
    output.className = 'output success animate-in';
}

// Utility function to add animation class
function addAnimation(element) {
    element.classList.remove('animate-in');
    // Force reflow
    element.offsetHeight;
    element.classList.add('animate-in');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Functions Demo Page Loaded! 🚀');
    
    // Add some interactive feedback
    const buttons = document.querySelectorAll('.demo-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add input validation feedback
    const inputs = document.querySelectorAll('.demo-input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#28a745';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });
});