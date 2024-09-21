import { useEffect, useState } from "react";

export default function Weather() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [location, setlocation] = useState("");
  async function fetchdata(param) {
    setloading(true);
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=6f810aed54ad49cf9db50638241909&q=${param}&aqi=no`
      );
      const result = await res.json();
      if (result) {
        setdata(result);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
      throw new Error(e);
    }
  }

  function fetching() {
    fetchdata(location.toLowerCase());
    setlocation("");
  }

  function getcurrentdate() {
    return new Date().toDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  useEffect(() => {
    fetchdata("mumbai");
  }, []);
  console.log(data);
  if (loading) return <h1> LOading data please wait !</h1>;
  return (
    <div className="weather-container">
      <h1> Weather Update</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setlocation(e.target.value)}
        placeholder="serach location"
      ></input>
      <button onClick={fetching}>find</button>
      {data && data.location ? (
        <div>
          <p> city is {data.location.name}</p>
          <p> country is {data.location.country}</p>
          <p> {data.current.condition.text}</p>
          <p> humidity is {data.current.humidity} %</p>
          <p> Tempreture is {data.current.temp_c} *celcius</p>
          <p> Wind speed is {data.current.wind_kph} kmph</p>
          <p> Date is {getcurrentdate()} </p>
        </div>
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
}
