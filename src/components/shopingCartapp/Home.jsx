import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Product from "./Products";
export default function Home() {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  async function fetchproduct() {
    try {
      setloading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      if (data) {
        setproduct(data);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }
  useEffect(() => {
    fetchproduct();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Circles
          height={"120"}
          width={"120"}
          color="rgb(0, 0, 139)"
          visible={true}
        ></Circles>
      </div>
    );
  }
  return (
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
      {product && product.length
        ? product.map((item) => <Product key={item.id} item={item} />)
        : null}
    </div>
  );
}
