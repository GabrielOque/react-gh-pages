const Cards = ({ grupo }) => {
  return (
    <>
      <div
        className="w-40 m-1 bg-green-400 rounded-lg"
        style={{ height: "176px" }}
      >
        <p className="p-4 font-bold text-white">{grupo.nameGroup}</p>
        <p className="pl-4 text-sm text-white">{grupo.descriptionGroup}</p>
        <p className="pt-1 pl-4 text-2xl font-bold text-white">
          {grupo.numTask} Tareas
        </p>
        <p className="pl-4 text-sm text-white">
          {grupo.numFinishTask} Tareas finalizadas
        </p>
        <div className="flex items-end w-full" style={{ height: "44px" }}>
          <div className="w-full h-10 bg-green-200 rounded-lg">
            <div className="flex justify-center w-full">
              <div className="flex justify-between w-1/4 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
