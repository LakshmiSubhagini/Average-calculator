
import React, { useState } from 'react';
import './App.css';
function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [average, setAverage] = useState(null);
  const [primes, setPrimes] = useState([]);
  const [evens, setEvens] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);
  const [fibonacci, setFibonacci] = useState([]);

  const handleAddNumber = () => {
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      setNumbers([...numbers, number]);
      setInputValue('');
    }
  };
  const handleCalculateAverage = () => {
    if (numbers.length > 0) {
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      const avg = sum / numbers.length;
      setAverage(avg);
    }
  };

  const handleCalculatePrimes = () => {
    const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    setPrimes(numbers.filter(isPrime));
  };

  const handleCalculateEvens = () => {
    setEvens(numbers.filter(num => num % 2 === 0));
  };

  const handleGenerateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  const handleCalculateFibonacci = () => {
    const fibonacciSeries = (num) => {
      const fib = [0, 1];
      for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;
    };
    setFibonacci(fibonacciSeries(numbers.length));
  };

  const handleClearNumbers = () => {
    setNumbers([]);
    setAverage(null);
    setPrimes([]);
    setEvens([]);
    setRandomNumber(null);
    setFibonacci([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Average Calculator</h2>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={handleAddNumber}>Add Number</button>
        <button onClick={handleCalculateAverage} disabled={numbers.length === 0}>
          Calculate Average
        </button>
        <button onClick={handleCalculatePrimes} disabled={numbers.length === 0}>
          Calculate Primes
        </button>
        <button onClick={handleCalculateEvens} disabled={numbers.length === 0}>
          Calculate Evens
        </button>
        <button onClick={handleGenerateRandomNumber}>
          Generate Random Number
        </button>
        <button onClick={handleCalculateFibonacci} disabled={numbers.length === 0}>
          Calculate Fibonacci
        </button>
        <button onClick={handleClearNumbers} disabled={numbers.length === 0}>
          Clear Numbers
        </button>
        <div>
          <h2>Numbers: {numbers.join(', ')}</h2>
          {average !== null && <h2>Average: {average}</h2>}
          {primes.length > 0 && <h2>Prime Numbers: {primes.join(', ')}</h2>}
          {evens.length > 0 && <h2>Even Numbers: {evens.join(', ')}</h2>}
          {randomNumber !== null && <h2>Random Number: {randomNumber}</h2>}
          {fibonacci.length > 0 && <h2>Fibonacci Sequence: {fibonacci.join(', ')}</h2>}
        </div>
      </header>
    </div>
  );
}
export default App;