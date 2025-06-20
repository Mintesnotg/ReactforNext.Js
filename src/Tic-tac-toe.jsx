import { useState } from "react"

const Square = ({value , Onsquareclicked}) => {


    return <button onClick={Onsquareclicked} className="square">{value}</button>

}

export default function Board() {


    const [squares,setsquares]= useState(Array(9).fill(null))
    const [XisNext,setXisNext]= useState(true);

    function handleclick (i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

       const nextsquare= squares.slice()
        XisNext ?  nextsquare[i]="X"  : nextsquare[i]="O"

        setsquares(nextsquare)
        setXisNext(!XisNext)

    }

    const winner = calculateWinner(squares);
    let gamestatus;

    if (winner) {
        gamestatus = 'Winner :' + winner;

    } else {
        gamestatus = 'Next Player ' + (XisNext ? 'X' : 'O')
    }
    return (
        <>
           {/* <p>
            Next player:    {XisNext ? "X" : "O"}
           </p> */}
           <div className="status">{gamestatus}</div>
            <div className="board-row mt-2">
                <Square value={squares[0]} Onsquareclicked={ ()=>handleclick(0)} />
                <Square value={squares[1]} Onsquareclicked={ ()=>handleclick(1)} />
                <Square value={squares[2]} Onsquareclicked={ ()=>handleclick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} Onsquareclicked={ ()=>handleclick(3)} />
                <Square value={squares[4]} Onsquareclicked={ ()=>handleclick(4)} />
                <Square value={squares[5]} Onsquareclicked={ ()=>handleclick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} Onsquareclicked={ ()=>handleclick(6)} />
                <Square value={squares[7]} Onsquareclicked={ ()=>handleclick(7)} />
                <Square value={squares[8]} Onsquareclicked={ ()=>handleclick(8)} />
            </div>

        </>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}