import { useState } from 'react'
import sebha from './assets/sebha3.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// 
  const increment = () => {
    setCount((count) => count+ 1)
  }

  const reset = () => {
   setCount(0) 
  }

  
  return (
    <>
      <div className="counter-container">
          <img src={sebha} alt="sebha" className="counter-image"/>
          <button onClick={reset} className='top-button'></button>
          <button onClick={increment} className="middle-button"></button>
        </div>
      
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>

      </div>
      
    </>
  )
}

export default App
