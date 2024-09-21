import { useEffect, useState } from "react";
import "./style.css";
export default function Loadmoredata() {
  const [loading, setloading] = useState(false);
  const [product, setproduct] = useState([]);
  const [count, setcount] = useState(0);
  const [disable, setdisable] = useState(false);
  async function fetchproduct() {
    try {
      setloading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await res.json();
      if (result && result.products && result.products.length) {
        setproduct((p) => [...p, ...result.products]);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }
  useEffect(() => {
    fetchproduct();
  }, [count]);
  useEffect(() => {
    if (product && product.length === 100) setdisable(true);
  }, [product]);
  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }
  return (
    <div className="containers">
      <div className="product-container">
        {product && product.length
          ? product.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={disable}
        className="button-container"
        onClick={() => setcount(count + 1)}
      >
        Loadmore Products
      </button>
      {disable ? <div>You have reached 100 products</div> : null}
    </div>
  );
}
