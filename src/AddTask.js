const AddTask = ({
  isFormTask,
  setIsFormTask,
  isComponentTask,
  setIsComponentTask,
}) => {
  return (
    <>
      <div
        className="absolute flex ml-2 bottom-16 left-0-0 h-14"
        style={{
          width: "340px",
        }}
      >
        <div className="flex items-center justify-center w-1/2 font-bold bg-blue-700 rounded-l-2xl">
          <button
            onClick={() => {
              setIsFormTask(!isFormTask);
              setIsComponentTask(!isComponentTask);
            }}
          >
            Crear Tarea
          </button>
        </div>
        <div className="flex items-center justify-center w-1/2 font-bold bg-red-700 rounded-r-3xl">
          <button>Crear Grupo</button>
        </div>
      </div>
    </>
  );
};
export default AddTask;
