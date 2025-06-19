export default function NameInput  ({name,onNameChange}){

    return (

        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> onNameChange(e.target.value)} />
    )
}

export function Greetings ({name}) {

   return    <h2> Hello ,{name || "Stranger"}</h2>
}