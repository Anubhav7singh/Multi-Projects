import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
  const [qrcode, setcode] = useState("");
  const [input, setinput] = useState("");
  function handlegenerate() {
    setcode(input);
    setinput("");
  }
  return (
    <div>
      <h1>Qrcodegenerator</h1>
      <div>
        <input
          text=""
          value={input}
          name="qr-code"
          placeholder="Enter your value"
          onChange={(e) => setinput(e.target.value)}
        ></input>
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handlegenerate}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrcode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
