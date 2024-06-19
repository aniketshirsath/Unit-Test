import React, { useState } from 'react';

function Counter() {

 const [count, setCount] = useState(0);
 const isPrime = (num) => {
    if (num <= 1) {

        return false;
    } 
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

  };
 
  return (
    <div className="App">
      <h1>Welcome to Counter</h1>
      <div>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        
      </div>
      <button onClick={() => setCount(0)} className='btn'>Reset Count</button>
      <h2>Count: {count}</h2>
      <p>Prime Number: {isPrime(count) ? 'true' : 'false'}</p>
    </div>
  );    
}
export default Counter;