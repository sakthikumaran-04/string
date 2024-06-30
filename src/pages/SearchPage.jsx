import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { ScaleLoader } from "react-spinners";
import { getSearch } from "../helpers/getSearch";
import { scrollToTop } from "../helpers/scrollToTop";

function SearchPage() {
  const { query } = useParams();
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [initialLoading, setInitialLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getSearchResults(offset) {
    if (!offset){ 
      scrollToTop();
      setInitialLoading(true);
     }
    else setLoading(true);
    let [res, total] = await getSearch(query, offset);
    setTotal(total);
    setData((prev) => [...prev, ...res]);
    setInitialLoading(false);
   setLoading(false);
  }

  useEffect(() => {
    setOffset(0);
    setData([]);
    getSearchResults(0);
  }, [query]);

  useEffect(() => {
    if(offset) getSearchResults(offset)
  }, [offset]);

  return (
    <>
      {initialLoading ? (
        <div className="min-h-[85vh] flex items-center justify-center">
          <ScaleLoader color="#4836d6" />
        </div>
      ) : (
        <div className="flex flex-col items-center pb-16">
          <p className="text-lg font-medium text-center py-7">
            Showing results for <span className="text-blue-500">"{query}"</span>
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {data.map((item, i) => {
              return <Card key={item.id} data={item} type="search" />;
            })}
          </div>
          {loading && (
            <div className="mt-14">
              <ScaleLoader color="#4838d6" />
            </div>
          )}
          {offset + 10 < total && (
            <button
              className="bg-blue-500 w-fit text-white py-2 px-6 font-medium rounded-lg mt-14"
              onClick={() => setOffset((prev) => prev + 10)}
            >
              {loading ? "Loading" : "show more"}
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default SearchPage;
