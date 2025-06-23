import { useRef, useState } from "react";
export default function ChatApp() {
    const [isSending, setIsSending] = useState(false)
    const timeoudId = useRef(null)

    function handleSend() {
        setIsSending(true)
        timeoudId.current = setTimeout(() => {


            alert('Sent...')
            setIsSending(false);

        }, 3000);

    }
    function handleSendundo() {

        setIsSending(false)
        clearTimeout(timeoudId.current)

    }
    return (

        <div>

            <button onClick={handleSend} disabled={isSending} > {isSending ? 'Sending ...' : 'Send'}  </button>
            {
                isSending && <button onClick={handleSendundo} >Undo</button>
            }
        </div>
    )



}

