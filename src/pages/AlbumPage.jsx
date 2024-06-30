import React, { useEffect, useState } from "react";
import { getAlbum } from "../helpers/getAlbum";
import { Link, useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { scrollToTop } from "../helpers/scrollToTop";

function AlbumPage() {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "----",
    artists: [{ name: "----" }],
    copyrights: ["----"],
    tracks: { items: [""] },
    images: [{ url: "https://placehold.co/600x400.png" }],
  });
  const [loading, setLoading] = useState(false);

  async function getAlbumResult() {
    scrollToTop();
    setLoading(true);
    const data = await getAlbum(id);
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    getAlbumResult();
  }, []);
  return (
    <>
      {loading ? (
        <div className="min-h-[85vh] flex items-center justify-center">
          <ScaleLoader color="#4836d6" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 place-items-center max-md:grid-cols-1 min-h-[75vh] px-3">
            <img
              src={data.images[0].url}
              className="md:w-[25vw] rounded-lg max-md:w-[310px] max-md:mt-10"
              alt=""
            />
            <div className="flex flex-col gap-1 md:gap-2 max-md:mt-8 max-md:justify-center px-4">
              <p className="text-2xl font-medium text-slate-700">
                Name : {data.name}
              </p>
              <p className="text-xl text-slate-600">
                Date: {data.release_date}
              </p>
              <p className="text-xl text-slate-600">
                Artists:
                {data.artists.map((artist, i) => {
                  if (data.artists.length - 1 == i) return " " + artist.name;
                  return " " + artist.name + ",";
                })}
              </p>
              <p className="text-xl text-slate-600">
                Copyrights :
                {data.copyrights.map((copyright, i) => {
                  
                    if (data.copyrights.length - 1 == i)
                      return " " + copyright.text;
                    return " " + copyright.text + ",";
                  
                })}
              </p>
              <p className="text-xl text-slate-600">
                Total Tracks: {data.total_tracks}
              </p>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl text-slate-600 font-medium px-6 text-center py-6">
              Tracks
            </p>
            <div className="pb-20">
              <table className="px-2 text-center md:w-[700px]">
                <tbody>
                <tr>
                  <th className="w-1/6">#</th>
                  <th className="w-1/2">Name</th>
                  <th className="w-1/6">Duration</th>
                </tr>
                {data.tracks.items.map((song,i) => (
                  <tr key={i} className="text-lg  text-slate-800">
                    <td>{song.track_number}</td>
                    <td className="underline cursor-pointer"><Link to={`/song/${song.id}`}>{song.name}</Link></td>
                    <td>{(song.duration_ms / 60000).toFixed(1)} min</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AlbumPage;
