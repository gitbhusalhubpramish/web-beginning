/** @format */

// Vanilla JavaScript functions for comparison

// 1. Update name function (traditional way)
function updateVanillaName() {
  const input = document.getElementById("vanilla-input");
  const nameSpan = document.getElementById("vanilla-name");
  const name = input.value.trim() || "Guest";

  // Manual DOM manipulation
  nameSpan.textContent = name;

  // Add some visual feedback
  nameSpan.style.color = "#2c3e50";
  nameSpan.style.fontWeight = "bold";

  // Reset input
  if (input.value.trim()) {
    input.style.borderColor = "#28a745";
  }
}

// 2. Update vanilla list (inefficient way)
let vanillaListItems = ["Item 1", "Item 2", "Item 3"];

function updateVanillaList() {
  const listContainer = document.getElementById("vanilla-list");

  // Add new item
  vanillaListItems.push(`Item ${vanillaListItems.length + 1}`);

  // Recreate entire HTML (inefficient)
  let html = "";
  vanillaListItems.forEach((item, index) => {
    html += `<p>📋 ${item}</p>`;
  });

  // Replace entire innerHTML (slow for large lists)
  listContainer.innerHTML = html;

  // Show loading effect to demonstrate slowness
  listContainer.style.opacity = "0.5";
  setTimeout(() => {
    listContainer.style.opacity = "1";
  }, 200);
}

// 3. Initialize checklist functionality
function initializeChecklist() {
  const checkboxes = document.querySelectorAll(
    '.checklist input[type="checkbox"]'
  );

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const label = this.parentElement;
      if (this.checked) {
        label.style.textDecoration = "line-through";
        label.style.color = "#28a745";
        label.style.fontWeight = "bold";
      } else {
        label.style.textDecoration = "none";
        label.style.color = "#2c3e50";
        label.style.fontWeight = "normal";
      }
    });
  });
}

// 4. Add interactive effects to buttons
function addButtonEffects() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    button.addEventListener("click", function () {
      // Add click animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });
}

// 5. Comparison counter for performance demonstration
let vanillaUpdateCount = 0;
let reactUpdateCount = 0;

function trackVanillaUpdates() {
  vanillaUpdateCount++;
  console.log(`Vanilla JS updates: ${vanillaUpdateCount}`);
}

function trackReactUpdates() {
  reactUpdateCount++;
  console.log(`React updates: ${reactUpdateCount}`);
}

// 6. Show React benefits with visual examples
function demonstrateReactBenefits() {
  const benefits = [
    {
      title: "Component Reusability",
      description: "Write once, use everywhere",
      icon: "🧩",
    },
    {
      title: "Virtual DOM",
      description: "Lightning-fast updates",
      icon: "⚡",
    },
    {
      title: "State Management",
      description: "Automatic UI updates",
      icon: "🔄",
    },
    {
      title: "Developer Experience",
      description: "Great tools and community",
      icon: "👨‍💻",
    },
  ];

  return benefits;
}

// 7. Traditional way of handling multiple components
function createTraditionalComponents() {
  // This would be very repetitive in vanilla JS
  const components = [
    { type: "button", text: "Login", class: "btn-primary" },
    { type: "button", text: "Register", class: "btn-secondary" },
    { type: "button", text: "Forgot Password", class: "btn-link" },
  ];

  let html = "";
  components.forEach((comp) => {
    html += `<button class="${comp.class}">${comp.text}</button>`;
  });

  return html;
}

// 8. Performance monitoring
function measurePerformance(operation, iterations = 1000) {
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    operation();
  }

  const end = performance.now();
  return end - start;
}

// 9. Add loading animations
function showLoading(elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = "<p>⏳ Loading...</p>";
  element.style.opacity = "0.7";

  setTimeout(() => {
    element.style.opacity = "1";
  }, 500);
}

// 10. Utility functions for demonstrations
const utils = {
  formatCurrency: (amount) => `Rs ${amount.toLocaleString()}`,

  generateRandomData: (count = 5) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 10000) + 1000,
      });
    }
    return items;
  },

  debounce: (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },
};

// 11. Traditional event handling examples
function setupTraditionalEventHandlers() {
  // Multiple event listeners for similar elements
  const buttons = document.querySelectorAll(".demo-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
    button.addEventListener("mouseenter", handleButtonHover);
    button.addEventListener("mouseleave", handleButtonLeave);
  });
}

function handleButtonClick(event) {
  console.log("Button clicked:", event.target.textContent);
}

function handleButtonHover(event) {
  event.target.style.backgroundColor = "#0056b3";
}

function handleButtonLeave(event) {
  event.target.style.backgroundColor = "";
}

// 12. State management comparison
const appState = {
  user: null,
  cart: [],
  theme: "light",
  notifications: [],
};

function updateAppState(key, value) {
  appState[key] = value;

  // Manual DOM updates for each state change
  updateUIBasedOnState();
}

function updateUIBasedOnState() {
  // This gets complex quickly in vanilla JS
  if (appState.user) {
    document.getElementById(
      "user-info"
    ).textContent = `Welcome, ${appState.user.name}`;
  }

  if (appState.cart.length > 0) {
    document.getElementById("cart-count").textContent = appState.cart.length;
  }

  if (appState.theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// 13. Initialize everything when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("React Introduction Demo Page Loaded! ⚛️");

  // Initialize interactive features
  initializeChecklist();
  addButtonEffects();

  // Add some educational console logs
  console.log("💡 Tip: Open React DevTools to see component structure!");
  console.log(
    "📚 This page demonstrates React concepts with interactive examples"
  );

  // Performance demonstration
  const vanillaPerf = measurePerformance(() => {
    const div = document.createElement("div");
    div.textContent = "Test";
  }, 1000);

  console.log(
    `Vanilla JS Performance: ${vanillaPerf.toFixed(2)}ms for 1000 operations`
  );

  // Add visual feedback for interactions
  const demoSections = document.querySelectorAll(".demo-section");
  demoSections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    section.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Animate sections on scroll (simple version)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  });

  demoSections.forEach((section) => {
    observer.observe(section);
  });

  // Show React version info
  if (window.React) {
    console.log(`React version loaded: ${React.version}`);
  }
});

// 14. Educational comments for beginners
/*
Why React is Better Than This Vanilla JS Code:

1. COMPONENT REUSABILITY:
   - Vanilla JS: Copy-paste similar code everywhere
   - React: Create component once, use everywhere

2. STATE MANAGEMENT:
   - Vanilla JS: Manual DOM updates everywhere
   - React: Change data, UI updates automatically

3. CODE ORGANIZATION:
   - Vanilla JS: Functions scattered across files
   - React: Related logic grouped in components

4. MAINTAINABILITY:
   - Vanilla JS: Hard to track what affects what
   - React: Clear data flow and component structure

5. PERFORMANCE:
   - Vanilla JS: Updates entire sections unnecessarily
   - React: Updates only what actually changed

6. DEVELOPER EXPERIENCE:
   - Vanilla JS: Lots of boilerplate code
   - React: Concise, declarative syntax
*/
