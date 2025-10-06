/** @format */

// Age Category Checker
function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const resultDiv = document.getElementById("ageResult");

  if (isNaN(age) || age < 0) {
    showResult(resultDiv, "Please enter a valid age!", "error");
    return;
  }

  let category;
  if (age < 13) {
    category = "Child 👶";
  } else if (age < 20) {
    category = "Teenager 🧒";
  } else if (age < 60) {
    category = "Adult 👨";
  } else {
    category = "Senior 👴";
  }

  showResult(resultDiv, `You are a ${category}`, "success");
}

// Grade Calculator
function calculateGrade() {
  const score = parseInt(document.getElementById("scoreInput").value);
  const resultDiv = document.getElementById("gradeResult");

  if (isNaN(score) || score < 0 || score > 100) {
    showResult(resultDiv, "Please enter a score between 0-100!", "error");
    return;
  }

  let grade;
  if (score >= 90) {
    grade = "A - Excellent! 🌟";
  } else if (score >= 80) {
    grade = "B - Good! 👍";
  } else if (score >= 70) {
    grade = "C - Average 😐";
  } else if (score >= 60) {
    grade = "D - Below Average 😕";
  } else {
    grade = "F - Failed 😞";
  }

  showResult(resultDiv, `Your grade: ${grade}`, getGradeClass(score));
}

function getGradeClass(score) {
  if (score >= 80) return "success";
  if (score >= 60) return "warning";
  return "error";
}

// Weather Clothing Advisor
function getClothingAdvice() {
  const temperature = parseInt(document.getElementById("tempInput").value);
  const isRaining = document.getElementById("rainCheck").checked;
  const resultDiv = document.getElementById("weatherResult");

  if (isNaN(temperature)) {
    showResult(resultDiv, "Please enter a valid temperature!", "error");
    return;
  }

  let advice;
  if (isRaining) {
    advice = "Take an umbrella and wear a jacket! ☔🧥";
  } else if (temperature > 25) {
    advice = "Wear light clothes, it's warm! ☀️👕";
  } else if (temperature > 15) {
    advice = "A light jacket should be fine. 🌤️🧥";
  } else {
    advice = "Bundle up, it's cold! 🥶🧣";
  }

  showResult(resultDiv, advice, "info");
}

// Day of Week Message (Switch)
function getDayMessage() {
  const day = document.getElementById("daySelect").value;
  const resultDiv = document.getElementById("dayResult");

  if (!day) {
    showResult(resultDiv, "Please select a day!", "error");
    return;
  }

  let message;
  switch (day) {
    case "Monday":
      message = "Start of the work week! Let's get motivated! 💪";
      break;
    case "Tuesday":
      message = "Tuesday blues! Hang in there! 😤";
      break;
    case "Wednesday":
      message = "Hump day! We're halfway there! 🐪";
      break;
    case "Thursday":
      message = "Almost Friday! You can do it! 🎯";
      break;
    case "Friday":
      message = "TGIF! Weekend is here! 🎉";
      break;
    case "Saturday":
    case "Sunday":
      message = "Weekend! Time to relax! 😎🏖️";
      break;
    default:
      message = "Invalid day selected.";
  }

  const resultClass =
    day === "Friday" || day === "Saturday" || day === "Sunday"
      ? "success"
      : "info";
  showResult(resultDiv, message, resultClass);
}

// Simple Calculator (Switch)
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultDiv = document.getElementById("calcResult");

  if (isNaN(num1) || isNaN(num2)) {
    showResult(resultDiv, "Please enter valid numbers!", "error");
    return;
  }

  if (!operator) {
    showResult(resultDiv, "Please select an operation!", "error");
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        showResult(resultDiv, "Cannot divide by zero!", "error");
        return;
      }
      result = num1 / num2;
      break;
    default:
      showResult(resultDiv, "Invalid operator!", "error");
      return;
  }

  showResult(resultDiv, `${num1} ${operator} ${num2} = ${result}`, "success");
}

// Password Strength Checker
function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const resultDiv = document.getElementById("passwordResult");

  if (!password) {
    showResult(resultDiv, "Please enter a password!", "error");
    return;
  }

  let strength;
  let resultClass;

  if (password.length < 6) {
    strength = "Weak: Too short (minimum 6 characters) 🔴";
    resultClass = "error";
  } else if (password.length < 10) {
    strength = "Medium: Good length but could be longer 🟡";
    resultClass = "warning";
  } else {
    strength = "Strong: Great length! 🟢";
    resultClass = "success";
  }

  // Additional checks for a more realistic password checker
  const hasNumbers = /\d/.test(password);
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length >= 6) {
    if (hasNumbers && hasLetters && hasSpecial) {
      strength += " (Has letters, numbers, and special characters!)";
    } else if (hasNumbers && hasLetters) {
      strength += " (Has letters and numbers)";
    } else {
      strength += " (Consider adding numbers and special characters)";
    }
  }

  showResult(resultDiv, strength, resultClass);
}

// Concert Entry Checker (Logical Operators)
function checkEntry() {
  const age = parseInt(document.getElementById("visitorAge").value);
  const hasTicket = document.getElementById("hasTicket").checked;
  const isVip = document.getElementById("isVip").checked;
  const resultDiv = document.getElementById("entryResult");

  if (isNaN(age) || age < 0) {
    showResult(resultDiv, "Please enter a valid age!", "error");
    return;
  }

  let message;
  let resultClass;

  if ((age >= 18 && hasTicket) || isVip) {
    message = "Welcome to the concert! 🎵🎉";
    resultClass = "success";
  } else {
    if (age < 18 && !isVip) {
      message = "Sorry, you must be 18+ to enter (unless you're VIP). 🚫";
    } else if (!hasTicket && !isVip) {
      message = "Sorry, you need a ticket to enter (unless you're VIP). 🎫";
    } else {
      message = "Sorry, you can't enter. Check the requirements! ❌";
    }
    resultClass = "error";
  }

  showResult(resultDiv, message, resultClass);
}

// Time-based Greeting
function getGreeting() {
  const hour = parseInt(document.getElementById("hourInput").value);
  const resultDiv = document.getElementById("greetingResult");

  if (isNaN(hour) || hour < 0 || hour > 23) {
    showResult(resultDiv, "Please enter a valid hour (0-23)!", "error");
    return;
  }

  generateGreeting(hour, resultDiv);
}

function getCurrentTimeGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const resultDiv = document.getElementById("greetingResult");

  document.getElementById("hourInput").value = hour;
  generateGreeting(hour, resultDiv);
}

function generateGreeting(hour, resultDiv) {
  let greeting;

  if (hour < 12) {
    greeting = "Good morning! ☀️ Time to start the day!";
  } else if (hour < 18) {
    greeting = "Good afternoon! 🌤️ Hope you're having a great day!";
  } else {
    greeting = "Good evening! 🌙 Time to wind down!";
  }

  showResult(resultDiv, greeting, "info");
}

// Utility function to show results with animation
function showResult(element, message, className) {
  element.textContent = message;
  element.className = `result ${className} show`;

  // Remove animation class after animation completes
  setTimeout(() => {
    element.classList.remove("show");
  }, 500);
}

// Add enter key support for inputs
document.addEventListener("DOMContentLoaded", function () {
  // Age checker
  document
    .getElementById("ageInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") checkAge();
    });

  // Grade calculator
  document
    .getElementById("scoreInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") calculateGrade();
    });

  // Weather advisor
  document
    .getElementById("tempInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") getClothingAdvice();
    });

  // Calculator
  document.getElementById("num2").addEventListener("keypress", function (e) {
    if (e.key === "Enter") calculate();
  });

  // Password checker
  document
    .getElementById("passwordInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") checkPassword();
    });

  // Entry checker
  document
    .getElementById("visitorAge")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") checkEntry();
    });

  // Greeting
  document
    .getElementById("hourInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") getGreeting();
    });
});
