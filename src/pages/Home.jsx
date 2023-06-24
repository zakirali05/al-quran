import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = async () => {
      const url = "https://al-quran1.p.rapidapi.com/";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c7ba7a97f0msh06f4841a52672d7p1eb204jsnd011d2490f75",
          "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();

        setData(result);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return (
    <div className="main w-[100%] h-[80vh] flex items-center justify-center bg-slate-800">
      <div className="flex flex-col gap-5 max-w-[80%] items-center justify-center md:max-w-[60%]">
        <h1 className="text-5xl font-[cursive] font-semibold text-white text-center">
          Welcome to our website
        </h1>
        <p className="text-xl text-slate-100 text-center w-[75%]   md:w-[60%]">
          read and analyse quran on daily basis from our website for free
        </p>
      </div>
    </div>
  );
};

export default Home;
