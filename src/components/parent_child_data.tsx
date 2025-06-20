import { useState } from "react"


function SuperParent({ OnInputentered, value }) {

    return (

        <div>
            <h4>Input 1</h4>

            <input onChange={(e) => OnInputentered(e.target.value)} value={value} />

            <h4>Input 2</h4>
            <input onChange={(e) => OnInputentered(e.target.value)} value={value} />

        </div>
    )
}
export default function ParentComponent() {

    const [value, setValue] = useState('')

    return (
        <>
            <h1>syncing-parent-child-inputs</h1>
            <SuperParent OnInputentered={setValue} value={value} />
        </>
    )
}

