import { useReducer } from "react";
const initialstate = { count: 0 };
function reducer(state, action) {
   debugger
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialstate

        default:
            return state;
    }
}

export default function Counter() {

    const [state, dispatch] = useReducer(reducer, initialstate)

    return (

        <div>
            <h2 className="text-xl">Count: {state?.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>


        </div>
    )
}