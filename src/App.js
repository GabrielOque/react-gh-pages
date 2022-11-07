import "./App.css";
import Agregar from "./Agregar";
import { useState, useEffect } from "react";
import Quitar from "./Quitar";

//

function muestraReloj() {
  var fechaHora = new Date();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  document.getElementById("reloj").innerHTML =
    horas + ":" + minutos + ":" + segundos;
}

window.onload = function () {
  setInterval(muestraReloj, 1000);
};

//

function App() {
  const [items, setItems] = useState(0);

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

  return (
    <h1 className="flex justify-center w-full h-screen bg-red-500">
      <div className="mt-20 bg-blue-600 w-96 h-96 rounded-xl">
        <div className="flex justify-center mt-2">
          <div className="flex justify-center p-2 bg-red-700 rounded-full">
            <p id="reloj" className="font-bold text-white"></p>
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-center w-1/2">
            <Agregar items={items} setItems={setItems} />
          </div>
          <div className="flex justify-center w-1/2">
            <Quitar items={items} setItems={setItems} />
          </div>
        </div>
        <div className="flex justify-center mt-4 ">
          <div className="flex justify-center w-40 font-bold bg-white rounded-full">
            {items}
          </div>
        </div>
        <div className="flex justify-center mt-4 text-3xl font-bold text-white">
          <h1>I'M Gabriel</h1>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-1/2">
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="input"
              placeholder="Example label"
            />
          </div>
        </div>
      </div>
    </h1>
  );
}

export default App;
