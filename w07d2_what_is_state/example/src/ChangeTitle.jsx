import React, { useState } from 'react';

const ChangeTitle = () => {
    const [title, setTitle] = useState('Cool React App');
    
    const handleInputChange = (event) => {
        const inputElement = event.target;
        const inputElementText = inputElement.value;
        setTitle(inputElementText);
    };

    return (
        <>
            <input
                onChange={handleInputChange}
                value={title}
            />
            <p>
                <strong>Title Preview:</strong>
                &nbsp;{title}
            </p>
        </>
    );
};

export default ChangeTitle;
