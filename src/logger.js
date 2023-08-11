const ENABLE_LOGGING = true; // Global flag to enable or disable logging

function logger(description, func, enableLogging = true) {
    const emojis = {
      "Variables": "💾",
      "Arrays": "🔢",
      "Objects": "🏗",
      "Object Creation and Modification": "🏗️",
      "Property and Key Access": "🔑",
      "Object Modification": "🛠️",
      "Object Testing": "🔍",
      "Object Iteration": "🔄",
      "Functions": "🧩",
      "Loops": "🔄",
      "Conditional": "❓",
      "Promises": "🤞",
      "Fetch": "📡",
      "Classes": "🎓",
      "DOM": "🔧",
      "Event Handling": "🎯",
      "Debugging": "🐛",
      "Testing": "✔️",
      "Comments": "💬",
      "Console": "📝",
      "Math and Numbers": "➕➖✖️➗",
    };
    if (!enableLogging) {
      return func; // Return the original function if logging is disabled
    }
    const emoji = emojis[description] || "👀";
  
    return function (...args) {
      try {
        console.group(emoji + " " + description); // Start a group
        console.log('🚀 Input:', args);
  
        // Get the original function source code
        const functionSource = func.toString();
  
        // Get the line number where the logger function is called
        const error = new Error();
        const stackLine = error.stack.split('\n')[2];
        const lineNumber = stackLine.match(/:(\d+):\d+/)[1];
  
        console.log(`Function (line ${lineNumber}):`, functionSource);
  
        const result = func(...args);
  
        console.log('🪐 Output:', result);
        console.groupEnd(); // End the group
  
        return result;
      } catch (error) {
        console.error('🔥 An error occurred:', error);
        console.groupEnd(); // End the group even in case of error
        throw error;
      }
    };
  }

module.exports = logger
