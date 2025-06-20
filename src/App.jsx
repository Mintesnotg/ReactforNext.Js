import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  {MyButton1,MyApp} from './components/button'
import Board from './Tic-tac-toe'

import ShooppingList from './components/list'
import NameInput from './components/Input'
import { Greetings } from './components/Input'
import InputName2 from './components/Liftingup'
// import { AnotherInput } from './components/Liftingup'
import './App.css'
import ProductApp from './components/thinking_'
function App() {
  const [count, setCount] = useState(0)
  const [name,setName]=useState("")
  const [value,setValue]=useState()
  const isLogged=true;
  return (
    <>
 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* {isLogged ? (<MyButton1/>) :(<MyButton2/>)} */}
        {isLogged && <MyButton1/>}
         <NameInput name={name} onNameChange={setName}/>
         {/* <InputName2 name={name} OnInputChange={setValue} />
         <AnotherInput value={name}/> */}
         <Greetings name={name}/>

         <ShooppingList/>
         <MyApp/>
         <Board/>
         <ProductApp/>
    
      </div>
 
    </>
  )
}

export default App
