import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);


    const increment = ( factor = 1) => {
        setCounter( counter + 1 );
    }

    const decrement = ( factor = 1 ) => {
        setCounter( counter - 1 );
    }

    const reset = ( ) => {
        setCounter( counter  );
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}
