import React, { useEffect, useRef, useState } from "react";
import { search } from "../assets/images.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search({ className }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.blur();
    setQuery("")
    navigate(`/search/${query}`)
  }

  return (
    <form
      className={`flex items-stretch justify-stretch gap-2 ${className}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="border rounded-md py-2 px-2 w-full"
        placeholder="search here..."
        name="search"
        id="search"
        autoComplete="off"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        ref={inputRef}
      />

      <button
        type="submit"
        className="p-2 bg-slate-50 rounded-md border h-full"
      >
        <img src={search} className="w-[25px]" alt="search" />
      </button>
    </form>
  );
}

export default Search;
