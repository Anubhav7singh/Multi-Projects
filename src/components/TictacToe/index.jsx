import { useEffect, useState } from "react";
import "./style.css";

function Square({ value, onclick }) {
  return (
    <button className="square" onClick={onclick}>
      {value}
    </button>
  );
}

export default function Tictactoe() {
  const [square, setsuare] = useState(Array(9).fill(""));
  const [isxturn, setturn] = useState(true);
  const [status, setstatus] = useState("");
  function handleclick(id) {
    let copysquare = [...square];
    if (winner(copysquare) || copysquare[id]) return;
    copysquare[id] = isxturn ? "X" : "O";
    setturn(!isxturn);
    setsuare(copysquare);
  }
  function winner(square) {
    const pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < pattern.length; i++) {
      const [a, b, c] = pattern[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!winner(square) && square.every((item) => item !== "")) {
      setstatus("Its a draw please restart the game ");
    } else if (winner(square)) {
      console.log("asdfjhasdf");
      setstatus(`winner is ${winner(square)}`);
    } else {
      setstatus(`player ${isxturn ? "X" : "O"} turn`);
    }
  }, [isxturn, square]);

  function handlerestart() {
    setturn(true);
    setsuare(Array(9).fill(""));
  }
  return (
    <div className="containertictac">
      <div className="row">
        <Square value={square[0]} onclick={() => handleclick(0)} />
        <Square value={square[1]} onclick={() => handleclick(1)} />
        <Square value={square[2]} onclick={() => handleclick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onclick={() => handleclick(3)} />
        <Square value={square[4]} onclick={() => handleclick(4)} />
        <Square value={square[5]} onclick={() => handleclick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onclick={() => handleclick(6)} />
        <Square value={square[7]} onclick={() => handleclick(7)} />
        <Square value={square[8]} onclick={() => handleclick(8)} />
      </div>
      <h2>{status}</h2>
      <button onClick={handlerestart}>Restart</button>
    </div>
  );
}
