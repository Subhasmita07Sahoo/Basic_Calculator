const display = document.getElementById("display");
let memory = 0; // Memory variable to store value for M+, M-, MR, MC

// Append digit/operator to the display
function appendValue(value) {
  display.value += value;
}

// Clear the entire input
function clearDisplay() {
  display.value = "";
}

// Delete last entered character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate and show result with error handling
function calculateResult() {
  try {
    const result = eval(display.value); // eval handles parentheses and BODMAS
    if (isNaN(result) || !isFinite(result)) throw "Math Error"; // Check for Infinity or NaN
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard input handling
document.addEventListener("keydown", (e) => {
  const allowed = "0123456789/*-+.()";
  if (allowed.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

// Extra Feature: Square root of current expression result
function squareRoot() {
  try {
    const value = eval(display.value);
    if (value < 0) throw "Invalid";
    display.value = Math.sqrt(value);
  } catch {
    display.value = "Error";
  }
}

// Memory Functions
function memoryAdd() {
  try {
    memory += eval(display.value || "0");
  } catch {
    memory = 0;
  }
}

function memorySubtract() {
  try {
    memory -= eval(display.value || "0");
  } catch {
    memory = 0;
  }
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}
