import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  {MyButton1,MyApp} from './components/button'
import Board from './Tic-tac-toe'

import ShooppingList from './components/list'
import NameInput from './components/Input'
import { Greetings } from './components/Input'
// import InputName2 from './components/LiftingStateup'
// import { AnotherInput } from './components/Liftingup'
import './App.css'
import ProductApp from './components/thinking_'
import TodoApp2 from './components/Todo2'
import ParentComponent from './components/parent_child_data'
import Form from './components/updatingobjects'
 import Parent from './components/parent_child'

import List from './components/updatingarray'
import Counter from './components/usingreducer'
import ToDoApp from './components/Todo'
import FormSubmit from './components/form'
import ToggleTheam from './components/togglelight'

import Counter2 from './components/Countercomp'

import ToggleThemeGpt from './components/chatgptcode'
import Chat from './components/message'

import ChatApp from './components/chatapp2'
// import FocusInput from './components/Ref'
function App() {
  const [count, setCount] = useState(0)
  const [name,setName]=useState("")
  const [value,setValue]=useState()
  const isLogged=true;
  return (
    <>
 
      <div className="card ">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        {/* {isLogged && <MyButton1/>}
         <NameInput name={name} onNameChange={setName}/>

         <Greetings name={name}/>
         <ParentComponent/>
         <ShooppingList/>
         <MyApp/>
         <Board/>
         <Form/>
         <ProductApp/> */}
         {/* <Parent/> */}
         {/* <List/>
         <TodoApp2/>
         <FormSubmit />
         <Counter/>
         <ToggleTheam/>
        */}
         {/* <FocusInput/>  */}
         {/* <Counter2/> */}
         {/* <Chat/> */}
          <ChatApp/>
      </div>
 
    </>
  )
}

export default App
