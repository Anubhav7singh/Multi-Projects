import { useState } from "react";
import uselocalstorage from "./Localaturage";
import "./style.css";
export default function Bgchanger() {
  const [theme, settheme] = uselocalstorage("theme", "dark");
  function toggletheme() {
    settheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-theme" data-theme={theme}>
      <div className="container">
        <h1>Hellow Anubhav</h1>
        <button onClick={toggletheme}>change to {theme} theme</button>
      </div>
    </div>
  );
}
