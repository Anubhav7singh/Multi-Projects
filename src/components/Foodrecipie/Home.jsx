import { useContext } from "react";
import { context } from "./Context";
import Recepieitem from "./Recepie";
export default function Home() {
  const { loading, data } = useContext(context);
  if (loading) return <div>Loading data Please wait!</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 ">
      {data && data.length > 0 ? (
        data.map((item) => <Recepieitem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-black text-center font-extrabold">
            Noting to show please search
          </p>
        </div>
      )}
    </div>
  );
}
