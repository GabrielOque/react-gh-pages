const Agregar = ({ items, setItems }) => {
  return (
    <>
      <div className="mt-4">
        <button
          className="p-1 font-bold bg-white rounded-lg"
          onClick={() => {
            setItems(items + 1);
          }}
        >
          Agregar
        </button>
      </div>
    </>
  );
};
export default Agregar;
