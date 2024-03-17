// Fibonacci Series: Write a JavaScript function to generate the Fibonacci series 
// up to a certain number of terms.

function fibonacciSeries(n) {
    let fibSeries = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
      fibSeries.push(nextFib);
    }
  
    return fibSeries;
  }
  
  // Example usage
  const n = 10;
  const fibNumbers = fibonacciSeries(n);
  console.log('Fibonacci Series:', fibNumbers);
  