import React, { useCallback, useState } from 'react';

import '../02-useEffect/effects.css'
import { ShowIncrement } from './showIncrement';

export const CallbackHook = () => {
    
    const [counter, setcounter] = useState(10 );

    // const increment = () => {
    //     setcounter( counter + 1 );
    // }

    const increment =useCallback(( num) => {
        setcounter( c => c + num );
    }, [setcounter]);
    


  return (
      <div>
          <h1>useCallback Hook { counter } </h1>
          <hr/>
        
        <ShowIncrement increment={   } />
      </div>
  )
};
