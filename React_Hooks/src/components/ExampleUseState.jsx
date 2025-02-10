import React, { useState } from 'react'

const ExampleUseState = () => {

    // let color = "Red";

    // const changeColor = () => {
    //     color = "Blue";
    //     console.log(color)
    // }

    // const [color, setColor] = useState("Red")
    // Also show the example of stateObject 

    // const changeColor = () => {
    //     setColor("Blue")
    // }

    // const [car, setCar] = useState({
    //     brand: "BMW",
    //     model: "X7",
    //     color: "Red",
    //     year: 2025
    // })

    // const changeColor = () => {
    //     setCar((prev) => {
    //         return {...prev, color: "Blue"}
    //     })
    // }


  return (
    <>
        <h1>My favourite color is {color}!</h1>
        <button onClick={changeColor}>Blue</button>

        {/* <h1>My, {car.brand}</h1>
        <h1>It is a {car.color} color {car.model} from {car.year}</h1>
        <button onClick={changeColor}>Blue</button> */}
    </>
  )
}

export default ExampleUseState
