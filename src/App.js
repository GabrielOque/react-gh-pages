import "./App.css";
import { useState } from "react";
import avatar from "./Imagenes/avatar.png"; // with import

//Componentes
import Header from "./Header";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  {
    /*
  useEffect(() => {
    if (
      localStorage.getItem("items") === "undefined" ||
      localStorage.getItem("items") === "null"
    ) {
      localStorage.setItem("items", JSON.stringify(0));
    }
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
*/
  }

  return (
    <>
      {isLogin && (
        <div className="h-screen bg-blue-300">
          <div className="w-full text-center">
            <p className="pt-8 text-4xl text-indigo-500">
              <span className="font-bold">Task Manager</span> App
            </p>
          </div>
          <div className="flex justify-center mt-8 ml-6 mr-6">
            <img className="" src={avatar} alt={"Carlie Anglemire"} />
          </div>
          <div className="mt-4 text-center">
            <p className="text-4xl font-bold text-indigo-700">Welcome</p>
            <p className="mt-4">
              En esta aplicación puesdes gestionar
              <br /> tus notas y tareas, así como también <br /> llevar un
              control total de tus notas <br />{" "}
              <p className="font-bold">¡Animate!</p>
            </p>
          </div>
          <div className="mt-6 text-center">
            <button
              className="w-40 pt-2 pb-2 pl-4 pr-4 text-xl font-bold text-white bg-indigo-300 cursor-pointer rounded-xl"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              LOGIN
            </button>
          </div>
          <div className="flex justify-center w-full mt-6">
            <div className="flex justify-between w-16">
              <div className="w-2 h-2 bg-indigo-900 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
      {!isLogin && <Header isHeader={isLogin} setIsHeader={setIsLogin} />}
    </>
  );
}

export default App;
