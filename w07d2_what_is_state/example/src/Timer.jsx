// Import the 'useState' React hook.
import React, { useState } from 'react';

const Timer = () => {
    // The 'useState' React hook returns an array.
    const secondsStateArray = useState(0);

    // The first element in the array is the CURRENT VALUE stored in-state.
    const seconds = secondsStateArray[0];

    // The second element in the array is the "SETTER" FUNCTION for our state.
    const setSeconds = secondsStateArray[1]; // When we run the SETTER, React will check if the state changed.

    setInterval(() => {
        // NEVER update state value ('seconds', in this example) directly.
        // When updating state, use the SETTER function that 'useState' gave us!
        // The SETTER function lets React know we're changing state, so it can re-render.
        // Re-render means that this function will run again
        setSeconds(seconds + 1);
        console.log(seconds, 'seconds have passed.');
    }, 1000);
    
    return (
        <p>{seconds} seconds have passed.</p>
    );
};

export default Timer;