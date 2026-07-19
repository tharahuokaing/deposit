/**
 * HUOKAING THARA - Institutional Ledger Controller
 * Adds new vault records to the audit table dynamically.
 */

function addVaultRecord(refId, tier, routing, amount) {
    const tableBody = document.getElementById("depositLogBody");
    
    // 1. Create a new row
    const newRow = document.createElement("tr");
    
    // 2. Populate row data
    newRow.innerHTML = `
        <td>${refId}</td>
        <td>${tier}</td>
        <td>${routing}</td>
        <td>$${parseFloat(amount).toLocaleString()}</td>
        <td><span class="status-confirmed">Verified</span></td>
    `;
    
    // 3. Append to the table
    tableBody.appendChild(newRow);
    
    // 4. Log to system console for audit tracking
    console.log(`[AUDIT]: Vault ${refId} successfully recorded in ledger.`);
}

// Example usage to trigger the record:
// addVaultRecord("REF-9921", "Platinum", "WIRE", "50000");
