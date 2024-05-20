//FIRST TASK
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Example usage:
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);

  //SECOND TASK
  async function awaitCall() {
    try {
      const data = await fetchDataFromAPI();
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  }
  
  // Example usage:
  awaitCall();
  
  // Simulated API call function
  async function fetchDataFromAPI() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    return { message: 'Data from API' };
  }

  //THIRD TASK
  async function awaitCall() {
    try {
      const data = await fetchDataFromAPI();
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  }
  
  // Example usage:
  awaitCall();
  
  // Simulated API call function
  async function fetchDataFromAPI() {
    await new Promise((resolve, reject) => {
      // Simulate API failure
      setTimeout(() => reject(new Error('API request failed')), 1000);
    });
  }

  //FOURTH TASK
  async function chainedAsyncFunctions() {
    await logWithDelay('First message', 1000);
    await logWithDelay('Second message', 1000);
    await logWithDelay('Third message', 1000);
  }
  
  async function logWithDelay(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  }
  
  // Example usage:
  chainedAsyncFunctions();

  //FIFTH TASK
  async function concurrentRequests() {
    const [result1, result2] = await Promise.all([
      fetchDataFromAPI('https://api.example.com/endpoint1'),
      fetchDataFromAPI('https://api.example.com/endpoint2')
    ]);
    console.log('Result 1:', result1);
    console.log('Result 2:', result2);
  }
  
  // Example usage:
  concurrentRequests();
  
  // Simulated API call function
  async function fetchDataFromAPI(url) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    return { data: `Data from ${url}` };
  }

  //SIXTH TASK
  async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => fetchDataFromAPI(url)));
    console.log('Responses:', responses);
  }
  
  // Example usage:
  const urls = ['https://api.example.com/endpoint1', 'https://api.example.com/endpoint2'];
  parallelCalls(urls);
  
  // Simulated API call function
  async function fetchDataFromAPI(url) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    return { data: `Data from ${url}` };
  }
  