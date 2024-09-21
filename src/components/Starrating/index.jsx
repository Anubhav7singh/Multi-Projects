import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function Starrating({ noofstars = 5 }) {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);
  function handleclick(getindex) {
    setrating(getindex);
  }
  function handlehover(getindex) {
    sethover(getindex);
  }
  function handleleave() {
    sethover(rating);
  }
  function resett() {
    sethover(0);
    setrating(0);
  }
  return (
    <div className="star-rating">
      {[...Array(noofstars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleclick(index)}
            onMouseEnter={() => handlehover(index)}
            onMouseLeave={() => handleleave()}
            size={40}
          />
        );
      })}
      <button onClick={resett}>Reset</button>
    </div>
  );
}
