import React from "react";
import { bg , email,github} from "../assets/images.js";

function Hero() {
  return (
    <>
      <div className="flex max-md:flex-col-reverse max-md:justify-center items-center min-h-[70vh] md:min-h-[70vh] justify-around md:mt-10">
        <div className="text-center max-w-[600px]">
          <p className="text-xl font-medium pl-2 text-slate-800">
            Welcome Guest,
          </p>
          <p className="text-4xl max-sm:text-xl font-medium text-slate-800">
            Track the Tracks,Get The Facts!
          </p>
          <p className="text-slate-500 font-medium">
            The place where you can find the details of the tracks that blown
            your mind!
          </p>
          <div className="mt-3 flex justify-center">
            <button className="py-2 px-7 bg-slate-100 mr-3 rounded-lg flex items-center justify-center"><img src={github} className="w-[20px] mr-2" alt="" />Github</button>
            <button className="py-2 px-7 bg-blue-500 text-white rounded-lg flex items-center justify-center"><img src={email} className="w-[20px] mr-2" alt="" />Mail Us</button>
          </div>
        </div>
        <img src={bg} className="w-[250px] max-sm:w-[200px]" alt="string" />
      </div>
    </>
  );
}

export default Hero;
