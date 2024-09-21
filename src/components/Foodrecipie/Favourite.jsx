import { useContext } from "react";
import { context } from "./Context";
import Recepieitem from "./Recepie";
export default function Favourites() {
  const { favourite } = useContext(context);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favourite && favourite.length > 0 ? (
        favourite.map((item) => <Recepieitem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-black text-center font-extrabold">
            Noting is added
          </p>
        </div>
      )}
    </div>
  );
}
