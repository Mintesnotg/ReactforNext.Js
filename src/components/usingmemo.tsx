import { ReactNode, useEffect, useMemo } from "react";

export default function Interactivity () {

    const items= [10,20];
    useMemo(() => {

        return items.sort((a, b) => a - b)

    }, [items])
    useEffect (()=> {


    },[])
}

export  function Layout ({href,children} :{href:string,children:ReactNode} ) {

  

}