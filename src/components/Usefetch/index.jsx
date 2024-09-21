import { useEffect, useRef, useState } from "react";
function Usefetch(url, options = {}) {
  const [data, setdata] = useState(null);
  const [pending, setpending] = useState(false);
  const [error, seterror] = useState(null);
  async function fetchdata() {
    setpending(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();
      setdata(result);
      seterror(null);
      setpending(false);
    } catch (e) {
      seterror(`{e} some error occured`);
      setpending(false);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [url]);

  return [data, error, pending];
}

function Useoutside() {
  return <div></div>;
}

export default function Fetchdatas() {
  const [data, error, pending] = Usefetch("https://dummyjson.com/products", {});
  const [show, setshow] = useState(false);
  const ref = useRef(null);
  function showdata() {
    setshow(!show);
  }

  function handletop() {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  }
  function handlebottom() {
    ref.current.scrollIntoView({ behaviour: "smooth" });
  }
  return (
    <div>
      <h1>Fetch datas</h1>
      {pending ? <h2> Pending data please wait !</h2> : null}
      {error ? <h2>{error}</h2> : null}
      <button onClick={showdata}>{show ? "removedata" : "show data"}</button>
      {show ? (
        data && data.products && data.products.length ? (
          <div>
            <button onClick={handlebottom}>scroll to bottom</button>
            {data.products.map((item) => (
              <p key={item.key}>{item.title}</p>
            ))}
            <button onClick={handletop} ref={ref}>
              scroll to top
            </button>
          </div>
        ) : null
      ) : null}
    </div>
  );
}
