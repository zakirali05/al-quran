import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const [nav, setNav] = useState("/");
  useEffect(() => {
    let url = location.pathname;
    setNav(url);
    console.log(nav);
  }, [nav]);
  return (
    <nav className=" p-4 bg-slate-700 text-white  text-xl font-semi-bold   justify-between items-center w-[100vw]">
      <h1 className="font-bold text-2xl font-[cursive] text-center cursor-pointer w-[100%] ">
        <Link to="/" onClick={() => setNav("/")}>
          Al-Quran
        </Link>
      </h1>
      <div className="buttons   flex items-center justify-around gap-4 pt-6 pb-3 flex-col md:flex-row text-slate-300">
        <Link to="/range">
          <button
            onClick={() => {
              setNav("/range");
            }}
            className={`uppercase rounded-lg p-2 hover:opacity-70 hover:animate-pulse cursor-pointer ${
              nav == "/range" ? "border-[1px] border-white" : ""
            }`}
          >
            Range of verses
          </button>
        </Link>
        <Link to="/chapter">
          <button
            onClick={() => {
              setNav("/chapter");
            }}
            className={`uppercase rounded-lg hover:opacity-70 p-2 hover:animate-pulse cursor-pointer ${
              nav == "/chapter" ? "border-[1px] border-white" : ""
            }`}
          >
            chapter
          </button>
        </Link>
        <Link to="/word">
          <button
            onClick={() => {
              setNav("/word");
            }}
            className={`uppercase rounded-lg hover:opacity-70 p-2  hover:animate-pulse cursor-pointer ${
              nav == "/word" ? "border-[1px] border-white" : ""
            }`}
          >
            specific word
          </button>
        </Link>
        <Link to="/verse">
          <button
            onClick={() => {
              setNav("/verse");
            }}
            className={`uppercase rounded-lg hover:opacity-70 p-2  hover:animate-pulse  cursor-pointer ${
              nav == "/verse" ? "border-[1px] border-white" : ""
            }`}
          >
            find verse
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
