import React from 'react';
import { useRef } from 'react/cjs/react.development';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
  return (

    <div>

        <h1>Focus Screen</h1>
        <hr/>


        <input
            ref={ inputRef }
            className='form-control'
            placeholder='Su nombre'
        />

        
        <hr/>
        <button 
            className='btn btn-outline-primary mt-05'
            onClick={ handleClick }>

            Focus

        </button>
    </div>
  )
};
