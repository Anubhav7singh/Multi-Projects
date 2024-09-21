import { NavLink } from "react-router-dom";
import { context } from "./Context";
import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
export default function Navbar() {
  const { search, setsearch, handleclick } = useContext(context);
  return (
    <nav className="flex justify-between items-center py-8  mx-auto flex-col lg:flex-row gap-5 lg:gap-0 bg-orange-400">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to="/"
          className="text-orange-950 hover:text-gray-700 duration-300 "
        >
          Foodrecipes
        </NavLink>
      </h2>
      <form
        onSubmit={handleclick}
        className="flex justify-between items-center"
      >
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          type="text"
          name="serch"
          placeholder="enter items"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-100 focus:shadow-blue-200"
        ></input>
        <button className="text-3xl" type="submit">
          <RiSearch2Line />
        </button>
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to="/"
            className="text-orange-950 hover:text-gray-700  duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourite"
            className="text-orange-950 hover:text-gray-700  duration-300"
          >
            Favourites
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/" className="text-black hover:text-gray-700  duration-300"> Home</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
