import { useState, useEffect } from "react";

function App() {
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resource]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-4xl text-white bg-slate-700">
        <h1 className="text-fuchsia-500">
          <span className="text-white">{"<"}</span>
          ResourceType <span className="text-white">{">"}</span>
        </h1>
        <div className="w-full flex justify-around p-5">
          <button
            onClick={() => setResource("posts")}
            className="bg-slate-600 p-2 border rounded-lg"
          >
            Posts
          </button>
          <button
            onClick={() => setResource("users")}
            className="bg-slate-600 p-2 border rounded-lg"
          >
            Users
          </button>
          <button
            onClick={() => setResource("comments")}
            className="bg-slate-600 p-2 border rounded-lg"
          >
            Comments
          </button>
        </div>
        <h1 className="mb-5">{resource}</h1>
        <div className="text-sm flex flex-col w-5/6 overflow-scroll">
          { items.map((item) => {
            // eslint-disable-next-line react/jsx-key
            return <p className="p-3">{ JSON.stringify(item) }</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
