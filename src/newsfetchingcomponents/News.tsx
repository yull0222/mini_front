import { useRef } from "react";
import NewsFetcher from "./NewsFetcher";

export default function News() {
    const inputRef = useRef('');
    const submitHandler = () => {
        console.log()
    };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <input type="text" className="border" ref={inputRef} onSubmit={submitHandler()}/>
        <NewsFetcher uriEncodedString={"%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90"}/>
    </div>
  )
}