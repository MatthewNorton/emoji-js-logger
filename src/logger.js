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
  const functionSource = func.toString();
  // line number retrieval
  const lineNumber = new Error().stack.match(/(?:\((.*?)\)| (.*?):)(\d+):/)[3];
  return async function (...args) {
    console.group(emoji + " " + description); // Start a group
    console.log('🚀 Input:', args);
    console.log(`Function (line ${lineNumber}):`, functionSource);

    // async functions
    let result;
    if (func.constructor.name === "AsyncFunction") {
      try {
        result = await func(...args);
        console.log('Promise State: Resolved');
      } catch (e) {
        console.log('Promise State: Rejected');
        console.error(e);
      }
    } else {
      result = func(...args);
    }

    console.log('🪐 Output:', result);
    console.groupEnd(); // End the group
    return result;
  };
}

module.exports = logger
