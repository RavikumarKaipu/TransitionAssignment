const rules = require("../config/rules");

const evaluateChecklist = (data) => {
    return rules.map((rule) => ({
        ruleName: rule.name,
        status: rule.evaluate(data) ? "Passed" : "Failed",
    }));
};

module.exports = { evaluateChecklist };
