/**
 * HUOKAING THARA - Deposit Module
 * Handles financial input and triggers dashboard refresh.
 */

const DepositModule = {
    // Simulated function to process the transaction
    processDeposit: function(amount) {
        const depositAmount = parseFloat(amount);

        // 1. Validation
        if (isNaN(depositAmount) || depositAmount <= 0) {
            console.error("[ERROR]: Invalid deposit amount.");
            alert("Please enter a valid amount.");
            return;
        }

        // 2. Logic: Update your backend or local state here
        console.log(`[SUCCESS]: Depositing $${depositAmount.toLocaleString()} into account.`);
        
        // 3. Trigger UI update
        // This calls the function we built in the previous step
        if (typeof initializeDashboardData === 'function') {
            initializeDashboardData();
        }
    }
};

// Example Usage:
// Connect this to your HTML button: 
// <button onclick="DepositModule.processDeposit(document.getElementById('depositInput').value)">
//    Deposit
// </button>
  
