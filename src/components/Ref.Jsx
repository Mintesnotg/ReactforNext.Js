import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Access the DOM element and focus it
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
