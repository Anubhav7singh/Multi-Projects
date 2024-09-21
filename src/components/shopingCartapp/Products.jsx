import { useDispatch, useSelector } from "react-redux";
import { addtocart, removefromcart } from "./SLice";

export default function Product({ item }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  function handleaddtocart() {
    dispatch(addtocart(item));
  }
  function handleremovefromcart() {
    dispatch(removefromcart(item.id));
  }
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-blue-900 p-4 h-[360px] mt-10 ml-5 rounded-xl bg-blue-100">
        <div className="h-[180px]">
          <img
            src={item?.image}
            alt={item?.title}
            className="object-cover h-full w-full"
          ></img>
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-slate-950 font-bold text-lg">
            {item?.title}
          </h1>
          <p className="text-blue-950 font-extrabold">Price : ${item?.price}</p>
          <p className="text-blue-950 font-extrabold">
            Rating :{item.rating.rate}
          </p>
        </div>
        <div>
          <button
            onClick={
              cart.some((items) => items.id === item.id)
                ? handleremovefromcart
                : handleaddtocart
            }
            className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4 text-center"
          >
            {cart.some((items) => items.id === item.id)
              ? "Remove From cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
