import "./App.css";
import Agregar from "./Agregar";
import { useState } from "react";
import Quitar from "./Quitar";
function App() {
  const [count, setCount] = useState(0);
  return (
    <h1 className="flex justify-center w-full h-screen bg-red-500">
      <div className="mt-20 bg-blue-600 w-96 h-96 rounded-xl">
        <div className="flex">
          <div className="flex justify-center w-1/2">
            <Agregar count={count} setCount={setCount} />
          </div>
          <div className="flex justify-center w-1/2">
            <Quitar count={count} setCount={setCount} />
          </div>
        </div>
        <div className="flex justify-center mt-4 ">
          <div className="flex justify-center w-40 font-bold bg-white rounded-full">
            {count}
          </div>
        </div>
      </div>
    </h1>
  );
}

export default App;
