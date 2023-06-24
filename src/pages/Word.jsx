import React, { useState } from "react";

const Word = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  const handleWordSubmit = async (wordd) => {
    const url = `https://al-quran1.p.rapidapi.com/corpus/${wordd}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c7ba7a97f0msh06f4841a52672d7p1eb204jsnd011d2490f75",
        "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="main">
      <div className="inputs w-[100vw] bg-slate-500  flex items-center justify-center ">
        <div className="search w-[78%]  md:w-[50%] flex  p-2">
          <input
            type="text"
            placeholder="Search any Word..."
            className="w-[80%] text-black p-2 "
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button
            onClick={() => {
              handleWordSubmit(word);
            }}
            className="p-2 w-[20%] bg-white text-black border-l-[1px] border-black  cursor-pointer hover:opacity-[0.75]"
          >
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <div className="w-[100%] h-[100vh] flex items-center justify-center text-xl font-[cursive] text-white">
          Loading...
        </div>
      ) : (
        data.map(
          (item, key) =>
            key > 0 && (
              <div key={key} className="custom p-4">
                <div className="data flex items-center justify-around p-2 font-semibold text-lg">
                  <h1>surah no :{item.surah_no}</h1>
                  <h1>ayat no :{item.verse_no}</h1>
                </div>
                <p className="font-xl text-slate-700 font-[cursive] p-6 text-center  flex items-center justify-center">
                  <p className="md:max-w-[60%]">{item.content}</p>
                </p>
              </div>
            )
        )
      )}
    </div>
  );
};

export default Word;
