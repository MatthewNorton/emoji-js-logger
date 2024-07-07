const ENABLE_LOGGING = true; // Global flag to enable or disable logging

function logger(description, func, enableLogging = true) {
    const emojis = {
      "Variables": "\u{1F4BE}",
      "Arrays": "\u{1F522}",
      "Objects": "\u{1F3D7}",
      "Object Creation and Modification": "\u{1F3D7}\u{FE0F}",
      "Property and Key Access": "\u{1F511}",
      "Object Modification": "\u{1F6E0}\u{FE0F}",
      "Object Testing": "\u{1F50D}",
      "Object Iteration": "\u{1F504}",
      "Functions": "\u{1F9E9}",
      "Loops": "\u{1F504}",
      "Conditional": "\u{2753}",
      "Promises": "\u{1F91E}",
      "Fetch": "\u{1F4E1}",
      "Classes": "\u{1F393}",
      "DOM": "\u{1F527}",
      "Event Handling": "\u{1F3AF}",
      "Debugging": "\u{1F41B}",
      "Testing": "\u{2705}",
      "Comments": "\u{1F4AC}",
      "Console": "\u{1F4DD}",
      "Math and Numbers": "\u{2795}\u{2796}\u{2716}\u{FE0F}\u{2797}",
    };
    if (!enableLogging) {
      return func; // Return the original function if logging is disabled
    }
    const emoji = emojis[description] || "\u{1F440}";
  
    return function (...args) {
      try {
        console.group(emoji + " " + description); // Start a group
        console.log('\u{1F680} Input:', args);
  
        // Get the original function source code
        const functionSource = func.toString();
  
        // Get the line number where the logger function is called
        const error = new Error();
        const stackLine = error.stack.split('\n')[2];
        const lineNumber = stackLine.match(/:(\d+):\d+/)[1];
  
        console.log(`Function (line ${lineNumber}):`, functionSource);
  
        const result = func(...args);
  
        console.log('\u{1FA90} Output:', result);
        console.groupEnd(); // End the group
  
        return result;
      } catch (error) {
        console.error('\u{1F525} An error occurred:', error);
        console.groupEnd(); // End the group even in case of error
        throw error;
      }
    };
  }

module.exports = logger;
