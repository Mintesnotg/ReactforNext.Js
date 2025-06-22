import { useReducer } from "react";

const initialState = { theme: 'light' };

function reducer(state, action) {
  switch (action.type) {
    case 'on':
      return { theme: 'light' };
    case 'off':
      return { theme: 'dark' };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function ToggleThemeGpt() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Switch between light and dark</h2>
      <p>Current Theme: {state.theme}</p>

      {state.theme === 'light' ? (
        <button onClick={() => dispatch({ type: 'off' })}>Switch to Dark</button>
      ) : (
        <button onClick={() => dispatch({ type: 'on' })}>Switch to Light</button>
      )}

      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
