import { useLayoutEffect, useState } from "react";

function Usewindowr() {
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  function handleevent() {
    setheight(window.innerHeight);
    setwidth(window.innerWidth);
  }
  useLayoutEffect(() => {
    handleevent();
    window.addEventListener("resize", handleevent);
    return () => {
      window.removeEventListener("resize", handleevent);
    };
  }, []);
  return { width, height };
}
export default function Usewindowresise() {
  const { width, height } = Usewindowr();
  return (
    <div>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}
