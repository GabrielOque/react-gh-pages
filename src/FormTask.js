const FormTask = ({ isFormTask, setIsFormTask, task, setTask }) => {
  const handleAddtask = () => {
    console.log("hola");
    const newTask = {
      id: Math.random(),
      titleTask: document.getElementById("titulo").value,
      description: document.getElementById("descripcion").value,
    };
    setTask([...task, newTask]);
  };
  return (
    <>
      <div className="absolute z-50 bg-indigo-200 left-2 w-96 top-52">
        <div className="relative">
          <div className="flex justify-center pt-5">
            <div className="w-1/2">
              <p className="text-xl font-bold">Titulo de la tarea</p>
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
                id="titulo"
                placeholder="Name"
                autocomplete="off"
              />
            </div>
          </div>
          <div className="flex justify-center pt-5 pb-5">
            <div className="w-1/2">
              <p className="text-xl font-bold">Descripción tarea</p>
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
                id="descripcion"
                placeholder="Description"
                autocomplete="off"
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="pt-2 pb-2 pl-8 pr-8 mb-3 text-xl font-bold text-white rounded-lg bg-sky-500"
              onClick={() => {
                handleAddtask();
                setIsFormTask(!isFormTask);
              }}
            >
              Crear
            </button>
          </div>
          <div className="absolute flex items-center justify-center bg-black rounded-full right-2 top-2 w-7 h-7">
            <button
              className="font-bold text-white"
              onClick={() => {
                setIsFormTask(!isFormTask);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormTask;
