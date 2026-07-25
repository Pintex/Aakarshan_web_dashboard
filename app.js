// ==========================================
// 1. HARDWARE REGISTER MAP (DOM Selectors)
// ==========================================
const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment-btn');
const resetButton = document.getElementById('reset-btn');

// ==========================================
// 2. SYSTEM STATE VOLATILE MEMORY
// ==========================================
let clickCount = 0;

// ==========================================
// 3. SYSTEM FUNCTIONS (Logic Routine)
// ==========================================
function updateDisplayRegistry() {
    // Write the variable value back to the screen's memory address
    counterDisplay.innerText = clickCount;
    console.log(`System Memory State Updated: Register Value = ${clickCount}`);
}

// ==========================================
// 4. INTERRUPT SERVICE ROUTINES (ISRs)
// ==========================================

// Trigger Signal Interrupt
incrementButton.addEventListener('click', () => {
    clickCount++; // Increment operational variable
    updateDisplayRegistry();
});

// Reset State Interrupt
resetButton.addEventListener('click', () => {
    clickCount = 0; // Reset variable register back to base state
    updateDisplayRegistry();
});
