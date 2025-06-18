import { useState } from "react"
export  const MyButton1 = ()=>  {
    const [count, setcount] = useState(0)
    const handleclick = () => {
        setcount(count+1)
    }
    return (
        <>
          <button className="avatar"onClick={handleclick} > clicked {count} times</button>
        </>
    )
}
export const MyApp = () => {
    const [button2count, setbutton2count] = useState(0)

    const handleclick1 = () => {

        setbutton2count(button2count + 1)
    }

    const MyButton2 = () => {

        return <button onClick={handleclick1}> clicked {button2count} times </button>

    }

    return (
        <>
            <MyButton2 />
            <MyButton2 />
            <MyButton2 />
            <MyButton2 />

        </>
    )

}

