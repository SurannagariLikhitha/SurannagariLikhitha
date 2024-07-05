import React, { useState } from 'react';
function Counter(){
    //Declare a state variable named "count" with an initial value of 0
    const [ count,setCount ] = useState(0);

    //Function to increment count
    function increment(){
        setCount(count + 1);
    };
    function decrement(){
        setCount(count - 1);
    };
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counter;
