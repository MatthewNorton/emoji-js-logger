
# Logger Utility 📝

Logger is a simple and powerful JavaScript utility that allows you to log various aspects of your code execution with emojis. From variables to promises, Logger helps you visually trace your code's behavior, making debugging a breeze!

## Features 🌟

- Logs a wide variety of code constructs with corresponding emojis.
- Provides a visual trace of the function's input, source, and output.
- Easy to integrate into development and debugging workflows.

## Installation 🔧

No installation needed! Just copy the logger code into your project, and you're ready to go.

## Usage 🛠️

Here's how to log a simple function:

```javascript
// Example function to be logged
function add(a, b) {
  return a + b;
}

// Wrap the example function with the logger
const loggedAdd = logger("Math and Numbers", add, ENABLE_LOGGING);

// Use the wrapped function
const result = loggedAdd(3, 5);
console.log("Logged result:", result); // This should output: Logged result: 8
```

Refer to the original code for more examples of how to use the logger with different constructs.

## Supported Constructs 🧩

- Variables
- Arrays
- Objects
- Functions
- Loops
- Conditionals
- Promises
- Fetch
- Classes
- DOM manipulations
- Event Handling
- Debugging
- Testing
- Console
- Math and Numbers

... and more!

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
