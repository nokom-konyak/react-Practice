import React, { useState } from 'react';

function UserInput() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: any) => {
        // event.preventDefault();
        alert(`You entered: ${inputValue}`);
        setInputValue(''); // clear input after submit
    };

    return (
        <form>
            <label>
                Enter text:
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type something..."
                />
            </label>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    );
}

export default UserInput;
