import React from 'react';

function DisplayItemList() {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h2>Fruit List</h2>
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    </div>
  );
}

export default DisplayItemList;
