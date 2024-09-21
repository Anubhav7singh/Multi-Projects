import { useDispatch } from "react-redux";
import { removefromcart } from "./SLice";

export default function Carttile({ item }) {
  const dispatch = useDispatch();
  function handleremovefromcarts() {
    dispatch(removefromcart(item.id));
  }

  return (
    <div className="flex items-center p-5 justify-between bg-blue-100 mt-2 mb-2 rounded-xl">
      <div className="p-3">
        <img
          src={item?.image}
          className="h-28 rounded-lg"
          alt={item?.title}
        ></img>
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-blue-950 font-bold">{item.title}</h1>
          <p className="text-blue-950 font-extrabold">Price : ${item?.price}</p>
          <p className="text-blue-950 font-extrabold">
            Rating :{item.rating.rate}
          </p>
          <div>
            <button
              onClick={handleremovefromcarts}
              className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4"
            >
              Remove From cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
