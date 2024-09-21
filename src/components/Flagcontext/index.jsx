import { createContext, useEffect, useState } from "react";
import featureflag from "./data";
export const flag = createContext(null);
export default function Featurejsx({ children }) {
  const [loading, setloading] = useState(false);
  const [enable, setenable] = useState({});
  async function feature() {
    try {
      setloading(true);
      const res = await featureflag();
      setenable(res);
      setloading(false);
    } catch (e) {
      console.log(e);
      setloading(false);
      throw new Error(e);
    }
  }
  useEffect(() => {
    feature();
  }, []);
  return <flag.Provider value={{ loading, enable }}>{children}</flag.Provider>;
}
