import { useReducer } from "react";

const intialstate = { theam: 'light' }

function reducer(currentlight, state) {
    debugger;
    switch (state.type) {
        case 'on':
            return { theam: 'light' }
        case 'off':
            return { theam: 'Dark' };
        case ('reset'):
            return intialstate


        default:
            return state
    }

}


export default function ToggleTheam() {


    const [state, dispatch] = useReducer(reducer, intialstate)
    // const [state, dispatch] = useReducer(reducer, initialstate)

    return (
        <div>
            <h2>Switch between light and dark</h2>
            <p>{state.theam}</p>
  

            {state.theam === 'light' ? <button onClick={() => dispatch({ type: 'off' })}>Off</button> :
                <button onClick={() => dispatch({ type: 'on' })}>On</button>

            }
            <button onClick={()=> dispatch({type:'reset'})}>reset to orginal light </button>



        </div>


    )
}