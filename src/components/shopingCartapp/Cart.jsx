import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carttile from "./Carttile";
export default function Cart() {
  const [total, settotal] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map((item) => (
              <Carttile item={item} />
            ))}
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-1 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-blue-950">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">
                  Total Items : {cart.length}
                </span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">
                  Total Amount : ${total.toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center ">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            No items added in the cart
          </h1>
          <Link to="/">
            <button className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
