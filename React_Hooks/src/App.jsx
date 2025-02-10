import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ExampleUseMemo from './components/ExampleUseMemo'
import ExampleUseCallback from './components/ExampleUseCallback'
import ExampleUseContext from './components/ExampleUseContext'
import ExampleUseReducer from './components/ExampleUsereducer'
import ExampleCustomHook from './components/ExampleCustomHook'
import ExampleUseState from './components/ExampleUseState'
import ExampleUseEffect from './components/ExampleUseEffect'
import ExampleUseRef from './components/ExampleUseRef'

function App() {

  return (
    <>
      {/* <ExampleUseState/> */}
      {/* <ExampleUseEffect/> */}
      <ExampleUseRef/>
      {/* <ExampleUseMemo/> */}
      {/* <ExampleUseCallback/> */}
      {/* <ExampleUseContext/> */}
      {/* <ExampleUseReducer/> */}
      {/* <ExampleCustomHook/> */}
    </>
  )
}

export default App
