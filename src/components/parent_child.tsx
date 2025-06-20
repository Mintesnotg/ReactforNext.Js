import { useState } from "react"

 export default function Parent() {

    const [isModalOpen, setModalOpen] = useState(false)
    return (
        <div>
            <OnModalButton onOpen={() => setModalOpen(true)} />

            {isModalOpen && <Modal OnClose={() => setModalOpen(false)} />}

            
        </div>

    )
}



function Modal({ OnClose }) {

    return (
        <>
            <div className="modal">
                This is Moldal
            </div>
            <button onClick={OnClose}>Close</button>
        </>
    )
}

function OnModalButton({ onOpen }) {
    return (
        <button onClick={onOpen}>Open Modal</button>
    )
}