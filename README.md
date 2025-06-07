# 🔢 Basic Calculator

A fully functional web-based calculator built using **HTML**, **CSS**, and **JavaScript**.  
It supports basic arithmetic operations, keyboard inputs, square root functionality, and memory operations like M+, M-, MR, and MC.

---

## 🚀 Features

### ✅ Core Calculator Features
- Perform basic arithmetic: **Addition (+)**, **Subtraction (-)**, **Multiplication (*)**, **Division (/)**.
- Maintains correct order of operations using **BODMAS/BIDMAS**.
- Input values via **mouse clicks** or **keyboard**.
- Supports **decimal** and **parentheses** for complex expressions.

### ➕ Extra Features
- **Square Root (√)**: Calculates the square root of the current expression.
- **Memory Functions**:
  - **M+ (Memory Add)**: Adds current value to memory.
  - **M- (Memory Subtract)**: Subtracts current value from memory.
  - **MR (Memory Recall)**: Recalls and appends the stored memory value.
  - **MC (Memory Clear)**: Clears the stored memory value.

### ⚠️ Error Handling
- Handles invalid expressions gracefully (e.g., `5/0`, `√-4`, `0/0`, malformed inputs).
- Displays `"Error"` for any invalid or undefined operations (e.g., `NaN`, `Infinity`).

---

## 🖥️ User Interface

- A **clean**, **responsive** layout styled with CSS.
- Easy-to-read display for expressions and results.
- Highlight effects for buttons on hover and click.

---

## 📁 Project Structure
Basic_Calculator/
│
├── index.html # HTML structure
├── style.css # Styling for calculator
├── script.js # JavaScript functionality
└── README.md # Project documentation
