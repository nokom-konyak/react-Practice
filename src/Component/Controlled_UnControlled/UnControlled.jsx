import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameRef}        // DOM element stores the value
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
