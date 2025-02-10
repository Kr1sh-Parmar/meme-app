import React, { useCallback, useState } from 'react'
import Header from './Header';

const ExampleUseCallback = () => {
    const [count, setCount] = useState(0);

    // this will create the new function everytime this component is re-rendered and this newly created function will be passed as props to the Header component so as the new props are passed to Header component it will also re-render
    const newFn = () => {}

    // give example of function equality

    // useCallback will not create another function, it will use the cached function, whenever it will create this function first time it will cache that function in the memory and whenever the re=render happens it will use that same cached function so the function will be same, if the function is same the Header props is same so as the Header props is not changing Header will not re-render again.
    // when any dependency is changing then it will create the new function
    // const newFn = useCallback(() => {}, [])

  return (
    <div>
        <Header newFn={newFn}/>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev+1)}>Click!</button>
    </div>
  )
}

export default ExampleUseCallback
