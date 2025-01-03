const readline = require("readline");

function checkPasswordComplexity(password) {
    let score = 0;
    const suggestions = [];

    // Criteria
    const hasLength = password.length >= 12;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNoCommonPattern = !/(password|1234|qwerty|admin|letmein|iloveyou)/i.test(password);

    // Scoring
    if (hasLength) score += 2; else suggestions.push("Use at least 12 characters.");
    if (hasUpperCase) score += 1; else suggestions.push("Include uppercase letters.");
    if (hasLowerCase) score += 1; else suggestions.push("Include lowercase letters.");
    if (hasNumber) score += 1; else suggestions.push("Add numbers.");
    if (hasSpecialChar) score += 1; else suggestions.push("Add special characters (e.g., !, #, %).");
    if (hasNoCommonPattern) score += 2; else suggestions.push("Avoid common passwords or patterns.");

    // Strength classification
    let strength;
    if (score <= 4) {
        strength = "Weak";
    } else if (score <= 6) {
        strength = "Moderate";
    } else {
        strength = "Strong";
    }

    return {
        strength,
        score,
        suggestions,
    };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function promptPassword() {
    rl.question("\nEnter a password to check its strength (or type 'exit' to quit): ", (password) => {
        if (password.toLowerCase() === "exit") {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        const { strength, score, suggestions } = checkPasswordComplexity(password);

        console.log("\nPassword Complexity Report:");
        console.log(`- Strength: ${strength}`);
        console.log(`- Score: ${score}/8`);

        if (suggestions.length > 0) {
            console.log("\nSuggestions for improvement:");
            suggestions.forEach((suggestion, index) => {
                console.log(`  ${index + 1}. ${suggestion}`);
            });
        } else {
            console.log("\nGreat Job! Your password is very secure.");
        }

        promptPassword();
    });
}
promptPassword();
