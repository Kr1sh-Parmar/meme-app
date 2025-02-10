import React, { useReducer } from 'react'

const ExampleUseReducer = () => {
    const initialState = {count: 0}

    const reducer = (state, action) => {
        switch(action.type) {
            case 'Increase' : {
                return {count: state.count + 1}
            }
            case 'Decrease': {
                return {count: state.count - 1}
            }
            // case 'input': {
            //     return {count: action.payload}
            // }
            default: {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'Increase'})}>Increase</button>
        <button onClick={() => dispatch({type: 'Decrease'})}>Decrease</button>

        {/* How to pass data */}
        {/* <br />
        <input type="text" value={state.count} onChange={(e) => dispatch({type: 'input', payload: Number(e.target.value)})}/> */}
    </>
  )
}

export default ExampleUseReducer
