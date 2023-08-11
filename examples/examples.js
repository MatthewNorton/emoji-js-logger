// Example 1: Logging a Function
function add(x, y) { return x + y; }
const loggedAdd = logger("Functions", add);
console.log(loggedAdd(1, 2)); // Logs input, function code, output

// Example 2: Logging an Async Function
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
const loggedFetchData = logger("Fetch", fetchData);
loggedFetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data));

// Example 3: Logging a Conditional
const loggedConditional = logger("Conditional", (x) => x > 5 ? 'big' : 'small');
console.log(loggedConditional(7)); // Logs input, function code, output

// Example 4: Logging Object Modification
const loggedObjModification = logger("Object Modification", (obj) => {
  obj.name = "Jane";
  obj.age += 1;
  return obj;
});
console.log(loggedObjModification({ name: "John", age: 30 })); // Logs input, function code, output

// Example 5: Logging a Promise
const loggedPromise = logger("Promises", (x) => new Promise(resolve => resolve(x)));
loggedPromise('data').then(console.log); // Logs input, function code, promise state, output

// Example 6: Logging Event Handling (Browser Environment)
const loggedEvent = logger("Event Handling", () => window.addEventListener('load', () => console.log('Loaded!')));
loggedEvent(); // Logs input, function code

// Example 7: Logging a DOM Access (Browser Environment)
const loggedDOM = logger("DOM", () => document.body);
console.log(loggedDOM()); // Logs input, function code, output (body element)

// Example 8: Logging Object Iteration
const loggedObjIteration = logger("Object Iteration", (obj) => {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
});
loggedObjIteration({ name: "John", age: 30 }); // Logs input, function code, iteration through object

// Example 9: Logging Math Operations
const loggedMath = logger("Math and Numbers", (x, y) => x * y);
console.log(loggedMath(5, 5)); // Logs input, function code, output

// Example 10: Logging a Class Creation
class MyClass { constructor(x) { this.x = x; } }
const loggedClass = logger("Classes", (x) => new MyClass(x));
console.log(loggedClass(5)); // Logs input, function code, output (instance of MyClass)
