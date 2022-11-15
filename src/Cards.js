const Cards = () => {
  return (
    <>
      <div className="w-40 m-1 bg-green-400 rounded-lg h-60">
        <p className="p-4 font-bold text-white">
          Landing Page <br /> Design
        </p>
        <p className="pl-4 text-sm text-white">Descripción</p>
        <p className="pt-1 pl-4 text-2xl font-bold text-white">8 Tareas</p>
        <p className="pl-4 text-sm text-white">2 Tareas finalizadas</p>
        <div className="flex items-end w-full" style={{ height: "84px" }}>
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
