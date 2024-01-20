import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex items-center justify-center h-screen'>
        <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          }}
        >
          <div className='flex items-center justify-center bg-black'>
            <h1>Password Generator</h1>
            <div>
              <input 
                type="text" 
                placeholder='Password' 
                readOnly 
              />
              <button>
                Copy
              </button>
            </div>
            <div>
              <input 
                type="range"
                min={5}
                max={20}
                

              />
              <label>
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

        </div>
     </div>
    </>
  )
}

export default App
