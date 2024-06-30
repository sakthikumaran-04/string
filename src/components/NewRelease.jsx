import React, { useEffect, useState } from "react";
import { getAlbumSuggestion } from "../helpers/getAlbumSuggestion";
import Card from "./Card";
import { ScaleLoader } from "react-spinners";

function NewRelease() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getAlbumSuggestionResult() {
    setLoading(true);
    const res = await getAlbumSuggestion();
    setData(res);
    setLoading(false);
  }
  useEffect(() => {
    getAlbumSuggestionResult();
  }, []);
  return (
    <>
    <p className="text-2xl text-slate-600 font-medium px-6 text-center pt-20 pb-8">
              New Releases
            </p>
      {loading ? (
        <div className="min-h-60 flex items-center justify-center"><ScaleLoader color="#4838d6" /></div>
      ) : (
        <div className=" mb-24 flex flex-col items-center">
            <div className="flex overflow-x-scroll gap-4 max-sm:max-w-full max-sm:px-4 max-w-[80vw] py-6">
              {data?.albums?.items.map((item, i) => (
                <Card key={i} data={item} type="newRelease"/>
              ))}
            
          </div>
        </div>
      )}
    </>
  );
}

export default NewRelease;
