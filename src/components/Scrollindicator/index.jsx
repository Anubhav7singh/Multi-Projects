import { useEffect, useState } from "react";
import "./scroll.css";
export default function Scrollindicator({ url }) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [scroll, setscroll] = useState(0);
  async function fetchdata(geturl) {
    try {
      setloading(true);
      const res = await fetch(geturl);
      const dat = await res.json();
      if (dat && dat.products.length > 0) {
        setdata(dat.products);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      seterror(e.message);
    }
  }

  function handlescroll() {
    const howmuchScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setscroll((howmuchScroll / height) * 100);
  }

  useEffect(() => {
    fetchdata(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  }, []);

  if (loading) {
    return <div>Loading Data please wait !</div>;
  }
  return (
    <div className="container">
      <div className="top-container">
        <h1> Coustom Scroll indicator</h1>
        <div className="scroll-progress-container">
          <div
            className="current-progress-container"
            style={{ width: `${scroll}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
}
