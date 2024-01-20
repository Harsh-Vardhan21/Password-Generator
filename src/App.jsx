import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
          <div id='container'>
            <h1>Password Generator</h1>
            <div class='input-button'>
              <input 
                id='input'
                type="text" 
                placeholder='Password' 
                
              />
              <button id='copy'>
                Copy
              </button>
              </div>
            <div id='range-length'>
              <input 
                id='range'
                type="range"
                min={5}
                max={20}
                

              />
              <label id='length'>
                Length:
              </label>
              </div>
              <div>
              <input 
                type="checkbox" 
              />
              <label>
                Character
              </label>
              <input 
                type="checkbox" 
              />
              <label>
                Numbers
              </label>
              </div>


          </div>
          

        
    </>
  )
}

export default App
