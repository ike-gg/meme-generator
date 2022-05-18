import React from 'react';

const Count = ({number}) => {
  console.log("Count rendered")
  return (
    <div className="counter--count">
        <h1>{number}</h1>
    </div>
  )
}

export default Count;