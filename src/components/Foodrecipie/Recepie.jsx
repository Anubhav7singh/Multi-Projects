import { Link } from "react-router-dom";
export default function Recepieitem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-orange-950  bg-orange-300">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-e-xl">
        <img
          src={item?.image_url}
          alt="recepie item"
          className="block w-full"
        ></img>
      </div>
      <div>
        <span className="text-sm text-orange-900 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          className="text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-orange-600 text-white"
          to={`/details/${item.id}`}
        >
          {" "}
          Recepie details
        </Link>
      </div>
    </div>
  );
}
