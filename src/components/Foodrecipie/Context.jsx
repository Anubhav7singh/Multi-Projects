import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const context = createContext(null);

export default function Context({ children }) {
  const [search, setsearch] = useState("");
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [detail, setdetail] = useState(null);
  const [favourite, setfavourite] = useState([]);
  const navigate = useNavigate();
  async function handleclick(e) {
    e.preventDefault();
    try {
      setloading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const result = await res.json();
      if (result?.data?.recipes) {
        setdata(result?.data?.recipes);
        setloading(false);
        setsearch("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setloading(false);
      setsearch("");
    }
  }
  function handlefavourite(id) {
    let cpy = [...favourite];
    const index = cpy.findIndex((item) => item.id === id.id);
    if (index === -1) {
      cpy.push(id);
    } else {
      cpy.splice(index);
    }
    setfavourite(cpy);
  }
  return (
    <context.Provider
      value={{
        search,
        setsearch,
        handleclick,
        data,
        loading,
        detail,
        setdetail,
        handlefavourite,
        favourite,
      }}
    >
      {children}
    </context.Provider>
  );
}
