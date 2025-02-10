import React, { useMemo, useState } from 'react'

const ExampleUseMemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const cubeNum = (num) => {
        console.log("Calculation done!");
        return Math.pow(num, 3);
    }
    
    const result = cubeNum(number);
    // const result = useMemo(()=>cubeNum(number), [number])

  return (
    <>
        <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
        <h1>Cube of the number: {result}</h1>
        <button onClick={() => {setCounter(counter+1)}}>Counter++</button>
        <h1>Counter: {counter}</h1>
    </>
  )
}

export default ExampleUseMemo
