import { useEffect, useState } from "react";
import Profile from "./Githubbprofile";
export default function Github() {
  const [name, setname] = useState("");
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState(null);
  async function fetchdata() {
    setloading(true);
    const res = await fetch(`https://api.github.com/users/${name}`);
    const dat = await res.json();
    if (dat) {
      setdata(dat);
      setname("");
      setloading(false);
    }
  }
  useEffect(() => {
    fetchdata();
    console.log("asdjfhajsdf");
  }, []);
  function handleclick() {
    fetchdata();
  }
  if (loading) {
    return <h2>Loading Please wait !</h2>;
  }
  return (
    <div className="github">
      <div className="github-profile">
        <input
          type="text"
          placeholder="serch by name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <button onClick={handleclick}> search</button>
      </div>
      {data !== null ? <Profile user={data} /> : null}
    </div>
  );
}
