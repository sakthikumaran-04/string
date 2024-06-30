import React from "react";
import { Link } from "react-router-dom";

function Card({data,type}) {
  return (
    <div className="w-[310px] border px-6 py-4 rounded-lg flex flex-col items-center gap-2">
      <img
        src={type=="search"?data.album.images[0].url:data.images[2].url}
        className="w-[300px] rounded-lg"
        alt=""
      />
      <div className="text-center">
        <p className="line-clamp-1">{data.name}</p>
        <div className=" line-clamp-1">
            {data.artists.map((artist,i)=>{
                return <p key={i}>Artists: {artist.name}</p>
            })}
        </div>
      </div>
      <div className="flex justify-around w-full">
        <Link to={type=="search"?`/song/${data.id}`:data.uri} ><button className="py-2 bg-slate-100 w-[120px] rounded-lg mr-2">{type=="search"?"Song":"Open Spotify"}</button></Link>
        <Link to={`/album/${type=="search"?data.album.id:data.id}`} ><button className="py-2 bg-blue-500 text-white w-[120px] rounded-lg">Album</button></Link>
      </div>
    </div>
  );
}

export default Card;
