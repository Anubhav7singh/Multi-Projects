import { createContext, useState } from "react";

export const context = createContext(null);
export default function Globalcontext({ children }) {
  const [data, setdata] = useState({
    type: "income",
    amount: 0,
    description: "",
  });
  const [value, setvalue] = useState("income");
  const [totalex, settotalex] = useState(0);
  const [totalin, settotalin] = useState(0);
  const [trans, setTrans] = useState([]);
  function handleformsubmit(cudata) {
    if (!cudata.description || !cudata.amount) return;
    setTrans([...trans, { ...cudata, id: Date.now() }]);
  }
  return (
    <context.Provider
      value={{
        data,
        setdata,
        totalex,
        settotalex,
        totalin,
        settotalin,
        value,
        setvalue,
        trans,
        setTrans,
        handleformsubmit,
      }}
    >
      {children}
    </context.Provider>
  );
}
