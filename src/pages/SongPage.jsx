import React, { useEffect, useState } from "react";
import Recommend from "../components/Recommend";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { getToken } from "../helpers/getToken";
import { getSong } from "../helpers/getSong";
import { scrollToTop } from "../helpers/scrollToTop";

function SongPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name:"----",
    artists:[{name:"----"}],
    album:{
        name:"----",
        images:[{url:"https://placehold.co/600x400.png"}]
    }
  });

  async function getSongResults(){
    scrollToTop();
    setLoading(true);
     let res = await getSong(id)
     setData(res);
     setLoading(false);

  }

  useEffect(()=>{
    getSongResults();
  },[id])
 
  return (
    <>
      {loading ? (
        <div className="min-h-[85vh] flex items-center justify-center">
          <ScaleLoader color="#4836d6" />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 place-items-center max-md:grid-cols-1 min-h-[75vh] px-3">
            <img
              src={data.album.images[0].url}
              className="md:w-[25vw] rounded-lg max-md:w-[310px] max-md:mt-10"
              alt=""
            />
            <div className="flex flex-col gap-1 md:gap-2 max-md:mt-8 max-md:justify-center px-4">
              <p className="text-2xl font-medium text-slate-700">
                Name: {data.name}
              </p>
              <p className="text-xl text-slate-600">
                Duration: {(data.duration_ms / 60000).toFixed(1)} min
              </p>
              <p className="text-xl text-slate-600">Album: {data.album.name}</p>
              <p className="text-xl text-slate-600">
                Date: {data.album.release_date}
              </p>
              
                <p className="text-xl text-slate-600">
                  Artists:
                  {data.artists.map((artist, i) => {
                    if (data.artists.length - 1 == i) return " " + artist.name;
                    return " " + artist.name + ",";
                  })}
                </p>

              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-xl text-slate-600">Preview: </p>
                <audio src={data.preview_url} controls></audio>
              </div>
            </div>
          </div>
          <Recommend id={id}/>
        </div>
      )}
    </>
  );
}

export default SongPage;
