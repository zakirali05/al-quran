import { React, useState } from "react";

const Verse = () => {
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  const handleVerseSubmit = async (chap, verse) => {
    const url = `https://al-quran1.p.rapidapi.com/${chap}/${verse}`;
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
      <div className="inputs w-[100vw] bg-slate-500  flex-col  md:flex-row   flex items-center justify-around ">
        <div className="search1 w-[90%]  md:w-[40%] flex  p-2">
          <input
            type="Number"
            placeholder="Search any chapter..."
            className="w-[100%] text-black p-2 "
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          />
          {/* <button
            onClick={() => {
              handleVerseSubmit(chapter, verse);
            }}
            className="p-2 w-[20%] bg-white text-black border-l-[1px] border-black  cursor-pointer hover:opacity-[0.75]"
          >
            Search
          </button> */}
        </div>
        <div className="search2 w-[90%]  md:w-[50%] flex  p-2">
          <input
            type="Number"
            placeholder="Search any Verse..."
            className="w-[80%] text-black p-2 "
            value={verse}
            onChange={(e) => setVerse(e.target.value)}
          />
          <button
            onClick={() => {
              handleVerseSubmit(chapter, verse);
            }}
            className="p-2 w-[20%] bg-white text-black border-l-[1px] border-black  cursor-pointer hover:opacity-[0.75]"
          >
            Search
          </button>
        </div>
      </div>

      <>
        {loading ? (
          <div className="w-[100%] h-[100vh] flex items-center justify-center text-xl font-[cursive] text-white">
            Loading...
          </div>
        ) : (
          <div className="bg-white text-black w-[100%] h-[100vh] p-5">
            <>
              {chapter > 0 && loading == false && (
                <>
                  <div className="verses">
                    <div className="p-8 flex flex-col items-center justify-center custom">
                      <h1 className="p-2 font-semibold text-3xl mb-4 font-[cursive] text-center  text-slate-800">
                        <span className="px-5">
                          {data.id.toString().split(".")[0]}
                        </span>
                        {data.content}
                      </h1>
                      <h2 className=" text-slate-700  max-w-[90%]   md:max-w-[80%]  first-letter:text-center">
                        {data.translation_eng}
                      </h2>
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
        )}
      </>
    </div>
  );
};

export default Verse;
