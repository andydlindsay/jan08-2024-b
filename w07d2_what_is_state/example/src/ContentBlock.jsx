import React from 'react';

const ContentBlock = (props) => { // We will accept ONE (1) parameter now.
    return (
        <>
            <h2>{props.title}</h2> {/* The object will need to contain a 'title' key-value. */}
            <p>{props.phrase}</p>  {/* The object will need to contain a 'phrase' key-value. */}
        </>
    );
};

export default ContentBlock;
