import { useRef, type FormEvent } from "react";

export default function Login() {
  const idRef: React.RefObject<string> = useRef("");
  const passRef: React.RefObject<string> = useRef("");
  const submitHandler = (e:FormEvent) => { //currently does nothing
    e.preventDefault();
    console.log(idRef.current.value);
    console.log(passRef.current.value) 
};
  return (
    <div
      className="w-1/3 h-100
                flex flex-col justify-center items-center
                border rounded-lg border-gray-200 shadow-md"
    >
      <span className="text-2xl font-bold">Sign in to your account</span>
      <form onSubmit={submitHandler} className="w-4/5 flex flex-col mt-10">
        <input
          type="text"
          ref={idRef}
          className="h-8 mt-1 mb-4 pl-2
                    rounded border focus:bg-gray-100
                    placeholder:text-gray-300 placeholder:italic"
          placeholder="ID"
        />
        <input
          type="password"
          ref={passRef}
          className="h-8 mt-1 mb-2 pl-2
                    rounded border focus:bg-gray-100
                    placeholder:text-gray-300 placeholder:italic"
          placeholder="Password"
        />
        <button
          className="h-7 p-3 my-3
                    rounded-lg
                    bg-blue-600 hover:bg-blue-800
                    text-white font-bold"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
