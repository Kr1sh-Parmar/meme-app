import React, { useEffect, useRef, useState } from 'react'

const ExampleUseRef = () => {

    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

    // const count = useRef(0)

    useEffect(()=> {
        setCount(count => count+1)
        // count.current = count.current + 1
    })
    return (
    <>
        <button onClick={() => {setValue(value => value-1)}}>-1</button>
        <h1>{value}</h1>
        <button onClick={() => {setValue(value => value+1)}}>+1</button>
        <h1>Render Count: {count}</h1>
        {/* <h1>Render Count: {count.current}</h1> */}
    </>
  )
}





// const ExampleUseRef = () => {

//     const inputElem = useRef()

//     const btnClicked = () => {
//         console.log(inputElem.current)
//         inputElem.current.style.background = "blue"
//     }

//     return (
//     <>
//         <input type="text" ref={inputElem}/>
//         <button onClick={btnClicked}>Click here</button>
//     </>
//   )
// }

export default ExampleUseRef
