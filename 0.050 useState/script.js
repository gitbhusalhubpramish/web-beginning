/** @format */

// Tab navigation functionality
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active");
      contents[index].classList.add("active");

      // Add bounce animation
      tab.classList.add("bounce");
      setTimeout(() => tab.classList.remove("bounce"), 600);
    });
  });
}

// Copy to clipboard functionality
function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const codeBlock = button.previousElementSibling.textContent;

      try {
        await navigator.clipboard.writeText(codeBlock);
        const originalText = button.textContent;
        button.textContent = "Copied!";
        button.style.background = "rgba(34, 197, 94, 0.9)";

        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = "rgba(14, 165, 233, 0.9)";
        }, 2000);
      } catch (err) {
        button.textContent = "Failed to copy";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      }
    });
  });
}

// Counter demo functionality
function initializeCounterDemo() {
  let count = 0;
  const display = document.getElementById("countDisplay");
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
  const resetBtn = document.getElementById("resetBtn");
  const codeDisplay = document.getElementById("countCode");

  function updateDisplay() {
    display.textContent = count;
    codeDisplay.textContent = `const [count, setCount] = useState(${count});`;

    // Add pulse animation
    display.classList.add("pulse");
    setTimeout(() => display.classList.remove("pulse"), 800);
  }

  incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
    console.log("useState: count updated to", count);
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
    console.log("useState: count updated to", count);
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
    console.log("🔄 useState: count reset to", count);
  });

  // Initialize display
  updateDisplay();
}

// Pattern demos functionality
function initializePatternDemos() {
  // Age changer demo
  let age = 25;
  const ageDisplay = document.getElementById("ageDisplay");
  const ageInput = document.getElementById("ageInput");
  const updateAgeBtn = document.getElementById("updateAgeBtn");

  function updateAgeDisplay() {
    ageDisplay.textContent = `Age: ${age}`;
    ageInput.value = age;
  }

  updateAgeBtn.addEventListener("click", () => {
    const newAge = parseInt(ageInput.value);
    if (!isNaN(newAge) && newAge >= 0 && newAge <= 120) {
      age = newAge;
      updateAgeDisplay();
      console.log("useState: age updated to", age);
    } else {
      alert("Please enter a valid age (0-120)");
    }
  });

  updateAgeDisplay();

  // Name input demo
  let name = "John Doe";
  const nameDisplay = document.getElementById("nameDisplay");
  const nameInput = document.getElementById("nameInput");

  function updateNameDisplay() {
    nameDisplay.textContent = `Hello, ${name}!`;
  }

  nameInput.addEventListener("input", (e) => {
    name = e.target.value || "Anonymous";
    updateNameDisplay();
    console.log("useState: name updated to", name);
  });

  nameInput.value = name;
  updateNameDisplay();

  // Visibility toggle demo
  let isVisible = true;
  const visibilityDisplay = document.getElementById("visibilityDisplay");
  const toggleVisibilityBtn = document.getElementById("toggleVisibilityBtn");

  function updateVisibilityDisplay() {
    visibilityDisplay.style.display = isVisible ? "block" : "none";
    toggleVisibilityBtn.textContent = isVisible
      ? "Hide Content"
      : "Show Content";
  }

  toggleVisibilityBtn.addEventListener("click", () => {
    isVisible = !isVisible;
    updateVisibilityDisplay();
    console.log("👁️ useState: visibility updated to", isVisible);
  });

  updateVisibilityDisplay();

  // Fruit list demo
  let fruits = ["Apple", "Banana", "Orange"];
  const fruitList = document.getElementById("fruitList");
  const newFruitInput = document.getElementById("newFruitInput");
  const addFruitBtn = document.getElementById("addFruitBtn");

  function updateFruitList() {
    fruitList.innerHTML = "";
    fruits.forEach((fruit, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${fruit}`;
      li.style.animation = "slideIn 0.3s ease";
      fruitList.appendChild(li);
    });
  }

  addFruitBtn.addEventListener("click", () => {
    const newFruit = newFruitInput.value.trim();
    if (newFruit && !fruits.includes(newFruit)) {
      fruits = [...fruits, newFruit];
      newFruitInput.value = "";
      updateFruitList();
      console.log("useState: fruits updated to", fruits);
    } else if (fruits.includes(newFruit)) {
      alert("This fruit is already in the list!");
    } else {
      alert("Please enter a fruit name!");
    }
  });

  updateFruitList();

  // User info demo
  let userInfo = { name: "Alice", email: "alice@example.com", age: 28 };
  const userInfoDisplay = document.getElementById("userInfoDisplay");
  const updateUserBtn = document.getElementById("updateUserBtn");

  function updateUserInfoDisplay() {
    userInfoDisplay.innerHTML = `
      <p><strong>Name:</strong> ${userInfo.name}</p>
      <p><strong>Email:</strong> ${userInfo.email}</p>
      <p><strong>Age:</strong> ${userInfo.age}</p>
    `;
  }

  updateUserBtn.addEventListener("click", () => {
    // Simulate updating user info
    userInfo = {
      ...userInfo,
      age: userInfo.age + 1,
    };
    updateUserInfoDisplay();
    console.log("👤 useState: userInfo updated to", userInfo);
  });

  updateUserInfoDisplay();
}

// Example demos functionality
function initializeExampleDemos() {
  // Like button demo
  let isLiked = false;
  let likeCount = 42;
  const likeBtn = document.getElementById("likeBtn");
  const likeStatus = document.getElementById("likeStatus");

  function updateLikeButton() {
    likeBtn.innerHTML = isLiked ? "❤️ Liked" : "🤍 Like";
    likeBtn.classList.toggle("liked", isLiked);
    likeStatus.textContent = isLiked
      ? `You and ${likeCount} others like this`
      : `${likeCount} people like this`;
  }

  likeBtn.addEventListener("click", () => {
    isLiked = !isLiked;
    likeCount += isLiked ? 1 : -1;
    updateLikeButton();
    console.log("❤️ useState: like status", { isLiked, likeCount });
  });

  updateLikeButton();

  // Todo list demo
  let todos = [
    { id: 1, text: "Learn React basics", completed: true },
    { id: 2, text: "Understand useState", completed: false },
    { id: 3, text: "Build a project", completed: false },
  ];
  let nextId = 4;

  const todoInput = document.getElementById("todoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");
  const todoCount = document.getElementById("todoCount");

  function updateTodoList() {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.completed ? "completed" : ""}`;
      li.innerHTML = `
        <span>${todo.text}</span>
        <div>
          <button class="toggle" onclick="toggleTodo(${todo.id})">
            ${todo.completed ? "Undo" : "Done"}
          </button>
          <button onclick="deleteTodo(${todo.id})">Delete</button>
        </div>
      `;
      todoList.appendChild(li);
    });

    const completedCount = todos.filter((todo) => todo.completed).length;
    todoCount.textContent = `${completedCount} of ${todos.length} completed`;
  }

  window.toggleTodo = (id) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateTodoList();
    console.log(
      "✅ useState: todo toggled",
      todos.find((t) => t.id === id)
    );
  };

  window.deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    updateTodoList();
    console.log("🗑️ useState: todo deleted", id);
  };

  addTodoBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text) {
      todos = [...todos, { id: nextId++, text, completed: false }];
      todoInput.value = "";
      updateTodoList();
      console.log("➕ useState: todo added", text);
    }
  });

  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodoBtn.click();
    }
  });

  updateTodoList();

  // Contact form demo
  let formData = { name: "", email: "", message: "" };
  let errors = {};
  let isSubmitted = false;

  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");
  const submitBtn = document.getElementById("submitContactBtn");
  const successMessage = document.getElementById("contactSuccess");

  function validateForm() {
    errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return Object.keys(errors).length === 0;
  }

  function updateFormErrors() {
    ["name", "email", "message"].forEach((field) => {
      const errorElement = document.getElementById(`${field}Error`);
      if (errorElement) {
        errorElement.textContent = errors[field] || "";
      }
    });
  }

  function handleInputChange(field, value) {
    formData = { ...formData, [field]: value };

    // Clear previous errors for this field
    if (errors[field]) {
      errors = { ...errors };
      delete errors[field];
      updateFormErrors();
    }

    console.log("📝 useState: form data updated", formData);
  }

  nameInput.addEventListener("input", (e) => {
    handleInputChange("name", e.target.value);
  });

  emailInput.addEventListener("input", (e) => {
    handleInputChange("email", e.target.value);
  });

  messageInput.addEventListener("input", (e) => {
    handleInputChange("message", e.target.value);
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateForm()) {
      isSubmitted = true;
      successMessage.style.display = "block";
      successMessage.textContent = "Thank you! Your message has been sent.";

      // Reset form
      formData = { name: "", email: "", message: "" };
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      console.log("✅ useState: form submitted successfully");

      setTimeout(() => {
        successMessage.style.display = "none";
        isSubmitted = false;
      }, 3000);
    } else {
      updateFormErrors();
      console.log("❌ useState: form validation failed", errors);
    }
  });
}

// Educational console helpers
function initializeConsoleHelpers() {
  console.log("🎓 useState Learning Session Started!");
  console.log(
    "💡 Tip: Watch the console for useState updates as you interact with demos"
  );
  console.log("Key useState concepts to remember:");
  console.log("   1. State is component memory");
  console.log("   2. Always use setState function to update");
  console.log("   3. State updates trigger re-renders");
  console.log("   4. Use functional updates for complex state");
  console.log("   5. Don't mutate state directly");
}

// Animation helpers
function addRandomAnimation(element) {
  const animations = ["bounce", "pulse", "animate-in"];
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];

  element.classList.add(randomAnimation);
  setTimeout(() => {
    element.classList.remove(randomAnimation);
  }, 1000);
}

// Page load effects
function initializePageEffects() {
  // Add fade-in animation to content sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("animate-in");
    }, index * 200);
  });

  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll(
    ".demo-btn, .pattern-demo button, .like-button, .todo-item button"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = "translateY(-2px)";
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translateY(0)";
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing useState lesson...");

  initializeTabs();
  initializeCopyButtons();
  initializeCounterDemo();
  initializePatternDemos();
  initializeExampleDemos();
  initializeConsoleHelpers();
  initializePageEffects();

  console.log("useState lesson initialized successfully!");
  console.log("Try interacting with the demos to see useState in action!");
});

// Error handling for missing elements
function safeQuerySelector(selector, callback) {
  const element = document.querySelector(selector);
  if (element && callback) {
    callback(element);
  } else if (!element) {
    console.warn(`Element not found: ${selector}`);
  }
  return element;
}

// Utility function for demo state logging
function logStateChange(component, state, action = "updated") {
  console.group(`🔄 useState: ${component} ${action}`);
  console.log("New state:", state);
  console.log("Type:", typeof state);
  if (Array.isArray(state)) {
    console.log("Length:", state.length);
  } else if (typeof state === "object" && state !== null) {
    console.log("Keys:", Object.keys(state));
  }
  console.groupEnd();
}

// Performance monitoring
function monitorStateUpdates() {
  let updateCount = 0;
  const originalLog = console.log;

  console.log = function (...args) {
    if (args[0] && args[0].includes("useState:")) {
      updateCount++;
      if (updateCount % 10 === 0) {
        console.warn(
          `Performance Note: ${updateCount} state updates so far. Remember to optimize when needed!`
        );
      }
    }
    originalLog.apply(console, args);
  };
}

// Initialize monitoring
monitorStateUpdates();

// Export functions for testing (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeTabs,
    initializeCounterDemo,
    initializePatternDemos,
    initializeExampleDemos,
    logStateChange,
  };
}
