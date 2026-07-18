(() => {
    "use strict";

    /* =========================================================
       ASSET METRICS DATA
    ========================================================= */
    const ASSET_CLASSES = [
        { name: "Corporate Operating Escrow", amount: "$108,200,000", percentage: 42.7 },
        { name: "Retail & High-Net-Worth Savings", amount: "$74,510,000", percentage: 29.4 },
        { name: "Interbank Overnight Placements", amount: "$45,200,000", percentage: 17.8 },
        { name: "Central Bank Term Deposits", amount: "$25,000,000", percentage: 9.8 }
    ];

    const RECENT_INFLOWS = [
        { id: "DEP-LN-9901", tier: "Corporate Wholesale", route: "Bakong Network Sweep", volume: "$4,500,000.00", status: "Success" },
        { id: "DEP-LN-9902", tier: "Institutional Fund", route: "FAST Clearing Node", volume: "$12,000,000.00", status: "Success" },
        { id: "DEP-LN-9903", tier: "VIP Treasury Bond", route: "Overnight Vault Lock", volume: "$850,000.00", status: "Processing" },
        { id: "DEP-LN-9904", tier: "Retail Pool Allocation", route: "Bulk Electronic Batch", volume: "$990,000.00", status: "Processing" },
        { id: "DEP-LN-9905", tier: "Corporate Wholesale", route: "Real-time Gross Settlement", volume: "$3,150,000.00", status: "Success" }
    ];

    /* =========================================================
       RENDERING ARCHITECTURE
    ========================================================= */
    function renderAssetDistribution() {
        const container = document.getElementById("distributionContainer");
        if (!container) return;

        container.innerHTML = ASSET_CLASSES.map(item => `
            <div class="tier-item">
                <div class="tier-info">
                    <span class="tier-name">${item.name}</span>
                    <span class="tier-value">${item.amount} (${item.percentage}%)</span>
                </div>
                <div class="tier-track">
                    <div class="tier-fill" style="width: ${item.percentage}%;"></div>
                </div>
            </div>
        `).join("");
    }

    function renderLedgerEntries() {
        const tbody = document.getElementById("depositLogBody");
        if (!tbody) return;

        tbody.innerHTML = RECENT_INFLOWS.map(log => `
            <tr>
                <td style="font-weight: 600; color: #38bdf8;">${log.id}</td>
                <td>${log.tier}</td>
                <td style="color: #94a3b8;">${log.route}</td>
                <td style="font-weight: 600; color: #fff;">${log.volume}</td>
                <td>
                    <span class="badge ${log.status === 'Success' ? 'success' : 'processing'}">
                        ${log.status}
                    </span>
                </td>
            </tr>
        `).join("");
    }

    function syncLedgerEngine() {
        console.log("[DEPOSIT LAYER] Initializing sync check against system nodes...");
        renderAssetDistribution();
        renderLedgerEntries();
    }

    /* =========================================================
       EVENT BINDINGS
    ========================================================= */
    document.addEventListener("DOMContentLoaded", () => {
        syncLedgerEngine();

        const syncBtn = document.getElementById("refreshDataBtn");
        if (syncBtn) {
            syncBtn.addEventListener("click", () => {
                console.log("[DEPOSIT LAYER] Re-fetching clearing pipelines...");
                syncLedgerEngine();
            });
        }
    });

})();
