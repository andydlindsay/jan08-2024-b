import React, { useState } from 'react';

const Counter = () => {
    // const countStateArray = useState(0);
    // const count = countStateArray[0];
    // const setCount = countStateArray[1];

    // Using array destructuring, we can get our two values in one line.
    const [count, setCount] = useState(0);

    // This function could be named however we'd like.
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <button onClick={handleClick}> {/* We pass our function into the 'onClick' and it is bound to the event. NO PARENTHESES HERE! */}
            This button has been clicked {count} times!
        </button>
    );
};

export default Counter;
