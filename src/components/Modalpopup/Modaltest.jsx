import { useState } from "react";
import Modal from "./Modal";
import "./modal.css";
export default function Modaltest() {
  const [modal, setmodal] = useState(false);
  function handletoggle() {
    setmodal(!modal);
  }
  function close() {
    setmodal(false);
  }
  return (
    <div>
      <button onClick={handletoggle}>Modal</button>
      {modal ? (
        <Modal body={<div> Body </div>} id={"label"} close={close} />
      ) : null}
    </div>
  );
}
