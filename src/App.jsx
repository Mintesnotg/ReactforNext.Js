import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  {MyButton1,MyApp} from './components/button'
import Board from './Tic-tac-toe'

import ShooppingList from './components/list'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const isLogged=true;
  return (
    <>
 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* {isLogged ? (<MyButton1/>) :(<MyButton2/>)} */}
        {isLogged && <MyButton1/>}
        
         <ShooppingList/>
         <MyApp/>
         <Board/>
    
      </div>
 
    </>
  )
}

export default App
