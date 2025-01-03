# Advanced Password Complexity Checker

A simple command-line tool built with Node.js to assess the strength of a password based on various security criteria. The tool provides a score, a strength classification, and actionable suggestions to improve the password.

---

## Features
- **Password Strength Assessment**: Classifies passwords as `Weak`, `Moderate`, or `Strong`.
- **Scoring System**: A total score out of 8 based on different password criteria.
- **Suggestions for Improvement**: Highlights specific areas to strengthen the password.
- **Interactive CLI**: Continuously prompts the user for passwords and allows exiting with a command.

---

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/password-checker.git
    cd password-checker
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

---

## Usage

Run the script using Node.js:
```bash
node password-checker.js
```

### Example
1. Enter a password to check its strength.
2. View a detailed report, including:
   - Strength classification
   - Score
   - Suggestions for improvement (if applicable)
3. Type `exit` to quit the tool.

---

## Scoring System

The password is evaluated based on the following criteria:
- **Length**: At least 12 characters (2 points)
- **Uppercase Letters**: Presence of at least one uppercase letter (1 point)
- **Lowercase Letters**: Presence of at least one lowercase letter (1 point)
- **Numbers**: Presence of at least one numeric character (1 point)
- **Special Characters**: Presence of at least one special character (e.g., `!`, `#`, `%`) (1 point)
- **No Common Patterns**: Avoids common patterns (e.g., `password`, `1234`, `qwerty`) (2 points)

**Score Ranges**:
- 0-4: Weak
- 5-6: Moderate
- 7-8: Strong

---

## Sample Output

```plaintext
Enter a password to check its strength (or type 'exit' to quit): password123

Password Complexity Report:
- Strength: Weak
- Score: 2/8

Suggestions for improvement:
  1. Use at least 12 characters.
  2. Include uppercase letters.
  3. Add special characters (e.g., !, #, %).
  4. Avoid common passwords or patterns.

Enter a password to check its strength (or type 'exit' to quit): exit
Goodbye!
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Author

Developed by [Apurv Nandgaonkar](https://github.com/your-username).
