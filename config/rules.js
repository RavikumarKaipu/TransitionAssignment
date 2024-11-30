module.exports = [
    {
        name: "Valuation Fee Paid",
        evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
        name: "UK Resident",
        evaluate: (data) => data.isUkResident === true,
    },
    {
        name: "Risk Rating Medium",
        evaluate: (data) => data.riskRating === "Medium",
    },
    {
        name: "LTV Below 60%",
        evaluate: (data) => {
            const ltv = (data.loanRequired / data.purchasePrice) * 100;
            return ltv < 60;
        },
    },
];
