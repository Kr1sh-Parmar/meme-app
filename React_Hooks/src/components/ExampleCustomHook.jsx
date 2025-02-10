import React from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'


const ExampleCustomHook = () => {

    // const [name, setName] = useState(
    //     localStorage.getItem('username') ? 
    //     localStorage.getItem('username') : ' '
    // )

    // useEffect(() => {
    //     localStorage.setItem('username', name)
    // }, [name])

    const [name, setName] = useLocalStorage('username', '')
    // Add another variable

  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <h2>Hello, {name}!</h2>
    </div>
  )
}

export default ExampleCustomHook
