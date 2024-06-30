import React, { useEffect, useState } from 'react'
import { getRecommendation } from '../helpers/getRecommendation';
import Card from './Card';
import { ScaleLoader } from 'react-spinners';

function Recommend({id}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getRecommendationRseult(){
    setLoading(true);
    const data = await getRecommendation(id);
    setData(data);
    setLoading(false)
  }
  useEffect(()=>{
    getRecommendationRseult();
  },[id])
  return (
    <>
      <p className='text-2xl text-slate-600 font-medium px-6 md:text-center py-6'>Recommendations</p>
      {loading? <div className="min-h-[85vh] flex items-center justify-center">
          <ScaleLoader color="#4836d6" />
        </div>:<div>
      <div className='flex flex-wrap gap-4 justify-center pb-12'>
        {data?.tracks?.length>0? data.tracks.map((item,i)=>(<Card key={i} data={item} type="search"/>)):" "}
      </div>
    </div>}
    </>
    
  )
}

export default Recommend