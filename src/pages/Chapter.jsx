import React, { useState } from "react";

const Chapter = () => {
  const [chapter, setChapter] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const handleChapterSubmit = async (chap) => {
    if (chap < 115) {
      const url = `https://al-quran1.p.rapidapi.com/${chap}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c7ba7a97f0msh06f4841a52672d7p1eb204jsnd011d2490f75",
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
        console.log(error);
      }
    } else {
      console.log("not possible");
    }
  };
  return (
    <div className="">
      <div className="inputs w-[100vw] bg-slate-500  flex items-center justify-center ">
        <div className="search w-[78%]  md:w-[50%] flex  p-2">
          <input
            type="Number"
            placeholder="Search any chapter..."
            className="w-[80%] text-black p-2 "
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          />
          <button
            onClick={() => {
              handleChapterSubmit(chapter);
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
              {chapter > 0 &&
                loading == false &&
                (chapter < 115 ? (
                  <>
                    {" "}
                    <h1 className="text-center text-5xl  font-bold text-slate-800 mb-8 cursor-pointer font-[cursive]">
                      {data.surah_name_ar}
                    </h1>
                    <div className="info flex flex-wrap items-center justify-around mb-4">
                      <div className="one text-md max-h-[64px] w-[50%] md:w-[25%] flex items-center justify-center p-5 bg-slate-700 text-white">
                        <p>Chapter:{data.id}</p>{" "}
                      </div>
                      <div className="two text-md max-h-[64px]  w-[50%] md:w-[25%] flex items-center justify-center p-5 bg-slate-700 text-white">
                        <p>
                          Name:{data.surah_name}{" "}
                          <span className=" hidden  md:block">
                            ({data.translation})
                          </span>
                        </p>{" "}
                      </div>
                      <div className="three text-md  max-h-[64px]  w-[50%] md:w-[25%] flex items-center justify-center p-5 bg-slate-700 text-white">
                        <p>Total Verses:{data.total_verses}</p>
                      </div>
                      <div className="four text-md max-h-[64px]   w-[50%] md:w-[25%] flex items-center justify-center p-5 bg-slate-700 text-white">
                        <p>Type:{data.type}</p>
                      </div>
                    </div>
                    <div className="verses">
                      {Object.keys(data.verses).map((key) => {
                        return (
                          <div
                            className="p-8 flex flex-col items-center justify-center custom"
                            key={key}
                          >
                            <h1 className="p-2 font-semibold text-3xl mb-4 font-[cursive] text-center  text-slate-800">
                              <span className="px-5">
                                {data.verses[key].id.toString().split(".")[0]}
                              </span>
                              {data.verses[key].content}
                            </h1>
                            <h2 className=" text-slate-700  max-w-[90%]  md:max-w-[80%]   text-center">
                              {data.verses[key].translation_eng}
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="w-[100vw] h-[100vh] flex items-start justify-center text-xl font-[cursive] text-red-800">
                    <h1 className="font-[cursive] text-xl font-semibold mt-[10%]">
                      There are total 114 chapter in quran
                    </h1>
                  </div>
                ))}
            </>
          </div>
        )}
      </>
    </div>
  );
};

export default Chapter;
