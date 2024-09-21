import { useEffect, useRef, useState } from "react";

function useoutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

export default function Useoutsideclick() {
  const [show, setshow] = useState(false);
  const ref = useRef();
  useoutside(ref, () => setshow(false));

  return (
    <div>
      {show ? (
        <div ref={ref}>
          <h1> This is a random content</h1>
          <p>Please click outside of this </p>
        </div>
      ) : (
        <button onClick={() => setshow(true)}> show content</button>
      )}
    </div>
  );
}
