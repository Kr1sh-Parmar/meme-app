import React, { useEffect, useState } from 'react'

const ExampleUseEffect = () => {

    const [count, setCount] = useState(0)

    // make sure to turn off strict mode
    useEffect(() => {
        setTimeout(() => {
            setCount(count => count+1)
        }, 2000)
    }, [])

  return (
    <>
        <h1>I've rendered {count} times</h1>
    </>
  )
}

export default ExampleUseEffect
