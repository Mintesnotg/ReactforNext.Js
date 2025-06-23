import { useReducer } from "react"

const initialcount = { count: 0 }

function reducer(state,action) {
 debugger;
    switch (action.type) {
        case 'add':
            return { count: state. count + 1 }
        case 'deduct':
            return { count: state.count - 1 }
        case 'reset':
            return initialcount
        default:
            state;
    }


}

export default function Counter2() {

    const [state, dispatch] = useReducer(reducer, initialcount)

    return (
        <div>
            <h2>current count : {state?.count}</h2>
            <button onClick={()=> dispatch({type:'add'})}>+</button>
            <button onClick={()=> dispatch({type:'deduct'})}>-</button>
            <button onClick={()=> dispatch({type:'reset'})}>Reset</button>

        </div>
    )


}