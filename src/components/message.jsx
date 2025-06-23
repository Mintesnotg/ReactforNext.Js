import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutID = useRef(null); // ✅ fix: use `const`, not `let`

  function handleSend() {
    setIsSending(true);

    timeoutID.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  //console.log(timeoutID.current)

  }

  function handleUndo() {
    debugger
    setIsSending(false);
    console.log(timeoutID.current)
    clearTimeout(timeoutID.current); // ✅ this now clears the correct timeout
  }

  return (
    <>

      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
    </>
  );
}
