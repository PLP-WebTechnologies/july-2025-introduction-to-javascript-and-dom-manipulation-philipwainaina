/* =========================================================
   JavaScript Fundamentals Assignment
   All Parts are clearly labeled and commented
   ========================================================= */

/* ---------------------------------------------------------
   PART 1 – VARIABLES, DATA TYPES, OPERATORS & CONDITIONALS
   --------------------------------------------------------- */

// Example: simple age-checker using user input
document.getElementById('ageBtn').addEventListener('click', () => {
  // Grab user input and convert to number
  const age = Number(document.getElementById('ageInput').value);

  // Basic validation
  if (isNaN(age)) {
    document.getElementById('ageMsg').textContent = 'Please enter a valid number.';
    return;
  }

  // Conditional logic
  let message;
  if (age < 18) {
    message = 'You are a minor.';
  } else if (age < 65) {
    message = 'You are an adult.';
  } else {
    message = 'You are a senior.';
  }

  // Output to the page
  document.getElementById('ageMsg').textContent = message;
});

/* ---------------------------------------------------------
   PART 2 – FUNCTIONS (REUSABLE LOGIC)
   --------------------------------------------------------- */

/**
 * Calculates the total price of items including tax.
 * @param {number[]} prices – array of individual prices
 * @param {number} taxRate  – tax rate as decimal (e.g., 0.07 for 7%)
 * @returns {number} final total
 */
function calculateTotal(prices, taxRate = 0.07) {
  const subtotal = prices.reduce((sum, p) => sum + p, 0);
  return +(subtotal * (1 + taxRate)).toFixed(2);
}

// Demo usage
document.getElementById('totalBtn').addEventListener('click', () => {
  const samplePrices = [19.99, 5.49, 3.25];
  const total = calculateTotal(samplePrices);
  document.getElementById('totalMsg').textContent =
    `Total (with 7% tax): $${total}`;
});

/**
 * Formats any string by capitalizing first letter and appending an exclamation.
 * @param {string} text
 * @returns {string} formatted text
 */
function formatText(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() + '!';
}

document.getElementById('formatBtn').addEventListener('click', () => {
  const raw = document.getElementById('formatInput').value;
  document.getElementById('formatMsg').textContent = formatText(raw);
});

/* ---------------------------------------------------------
   PART 3 – LOOPS (FOR, WHILE, forEach)
   --------------------------------------------------------- */

// Loop example 1: classic for loop to build list items
document.getElementById('loopBtn1').addEventListener('click', () => {
  const ul = document.getElementById('list1');
  ul.innerHTML = ''; // clear previous
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
  }
});

// Loop example 2: while loop countdown
document.getElementById('loopBtn2').addEventListener('click', () => {
  const p = document.getElementById('countdown');
  let count = 5;
  p.textContent = count;

  const timer = setInterval(() => {
    count--;
    if (count >= 0) {
      p.textContent = count;
    } else {
      clearInterval(timer);
      p.textContent = 'Blast off!';
    }
  }, 1000);
});

// Loop example 3: forEach loop to sum numbers
document.getElementById('loopBtn3').addEventListener('click', () => {
  const numbers = [3, 7, 12, 5];
  let sum = 0;
  numbers.forEach(n => sum += n);
  document.getElementById('sumMsg').textContent = `Sum of [${numbers.join(', ')}] = ${sum}`;
});

/* ---------------------------------------------------------
   PART 4 – DOM MANIPULATION (AT LEAST 3 INTERACTIONS)
   --------------------------------------------------------- */

// Interaction 1: toggle a CSS class
document.getElementById('toggleBtn').addEventListener('click', () => {
  const para = document.getElementById('toToggle');
  para.classList.toggle('highlight');
});

// Interaction 2: change text content
document.getElementById('changeTextBtn').addEventListener('click', () => {
  const target = document.getElementById('textTarget');
  target.textContent = 'Text dynamically changed by JavaScript!';
});

// Interaction 3: create elements dynamically
document.getElementById('addBtn').addEventListener('click', () => {
  const box = document.createElement('div');
  box.className = 'colorBox';

  // Random color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r},${g},${b})`;

  document.getElementById('boxHolder').appendChild(box);
});