const Quitar = ({ count, setCount }) => {
  return (
    <>
      <div className="mt-4">
        <button
          className="p-1 font-bold bg-white rounded-lg "
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Quitar
        </button>
      </div>
    </>
  );
};
export default Quitar;
