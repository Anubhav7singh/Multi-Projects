import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "./Context";

export default function Details() {
  const params = useParams();
  const { detail, setdetail, handlefavourite, favourite } = useContext(context);
  async function getdetail() {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
    );
    const data = await res.json();
    if (data?.data) {
      setdetail(data.data);
    }
  }
  useEffect(() => {
    getdetail();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={detail?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {detail?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {detail?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handlefavourite(detail?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-orange-600 text-white"
          >
            {favourite &&
            favourite.length > 0 &&
            favourite.findIndex((item) => item.id === detail?.recipe?.id) !== -1
              ? "Remove from favourites"
              : "  Add to favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients ::
          </span>
          <ul className="flex flex-col gap-3 ">
            {detail?.recipe?.ingredients.map((item) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {item.quantity}
                  {item.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
