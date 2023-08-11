const logger = require('../src/logger');
const fetchData = async (url) => {
  return {
    data: [{
      fact: 'Logs come from Trees!',
      keyword: 'logger'
    }]
  };
};

describe('logger function', () => {
  it('should return the original function when logging is disabled', () => {
    const description = 'Test Function';
    const testFunction = () => 'Foo I see you';
    const wrappedFunction = logger(description, testFunction, false);
    expect(wrappedFunction).toBe(testFunction);
  });

  it('should return a new function when logging is enabled', () => {
    const description = 'Test Function';
    const testFunction = () => 'Hello, world!';
    const wrappedFunction = logger(description, testFunction, true);
    expect(wrappedFunction).not.toBe(testFunction);
  });

  it('should log input and return the result of async functions', async () => {
    // Mock console.log to capture its calls
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Wrap fetchData with logger
    const loggedFetchData = logger("Fetch", fetchData);

    // Execute the wrapped function and check the result
    const result = await loggedFetchData('https://example.com/api');

    // Check that console.log was called (exact details depend on your logger's behavior)
    expect(logSpy).toHaveBeenCalled();

    // Clean up by restoring the original console function
    logSpy.mockRestore();

    expect(result).toEqual({
      data: [{
        fact: 'Logs come from Trees!',
        keyword: 'logger'
      }]
    });
  });
});
