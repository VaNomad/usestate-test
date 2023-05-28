import { useState } from "react";

function App() {
  const [resource, setResource] = useState('posts');

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-4xl text-white bg-slate-700">
        <h1 className="text-fuchsia-500">
          <span className="text-white">{"<"}</span> ResourceType <span className="text-white">{">"}</span>
        </h1>
        <div className="w-full flex justify-around p-5">
          <button
            onClick={() => setResource("posts")}
            className="bg-slate-600 p-2 border"
          >
            Posts
          </button>
          <button
            onClick={() => setResource("users")}
            className="bg-slate-600 p-2 border"
          >
            Users
          </button>
          <button
            onClick={() => setResource("comments")}
            className="bg-slate-600 p-2 border"
          >
            Comments
          </button>
        </div>
        <h1>{resource}</h1>
      </div>
    </>
  );
}

export default App;
