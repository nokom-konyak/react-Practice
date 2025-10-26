import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}           // value controlled by React state
        onChange={(e) => setName(e.target.value)} // updates state
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
