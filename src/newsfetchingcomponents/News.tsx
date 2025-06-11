import { useEffect, useRef, useState, type FormEvent } from "react";
import NewsFetcher from "./NewsFetcher";

export default function News() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const submitHandler = (e:FormEvent) => {
    e.preventDefault();
    const query:string = encodeURI(inputRef.current.value);
    setQuery(query);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border"
          ref={inputRef}
        />
        <button type="submit"></button>
      </form>
      <NewsFetcher uriEncodedString={query} />
    </div>
  );
}
