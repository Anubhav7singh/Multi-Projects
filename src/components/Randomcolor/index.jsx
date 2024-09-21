import { useEffect, useState } from "react";
export default function Randomcolor() {
  const [tyoecolor, settypecolor] = useState("hex");
  const [color, setcolor] = useState("#000000");
  function randomcolor(length) {
    return Math.floor(Math.random() * length);
  }
  function handlerandomhexcolor() {
    const hex = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, "A", "B", "C", "D", "F", "E"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomcolor(hex.length)];
    }
    setcolor(hexcolor);
  }
  function handlerandomrgbcolor() {
    const r = randomcolor(256);
    const g = randomcolor(256);
    const b = randomcolor(256);
    setcolor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (tyoecolor === "rgb") handlerandomrgbcolor();
    else handlerandomhexcolor();
  }, [tyoecolor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => settypecolor("hex")}>Create HEX color</button>
      <button onClick={() => settypecolor("rgb")}>Create RGB color</button>
      <button
        onClick={
          tyoecolor === "hex" ? handlerandomhexcolor : handlerandomrgbcolor
        }
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "50px",
          marginTop: "40px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{tyoecolor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
