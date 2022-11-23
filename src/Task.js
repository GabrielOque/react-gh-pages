const Task = ({ t }) => {
  return (
    <>
      <ol>
        <li
          key={t.id.toString()}
          className="flex justify-center h-16 m-4 bg-gray-100"
          style={{ borderRadius: "10px 10px 10px 10px" }}
        >
          <div
            className="flex items-center justify-center w-1/4 bg-green-400"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          >
            <div
              className="flex items-center justify-center text-white rounded-full w-14 h-14"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "black",
              }}
            >
              10 %
            </div>
          </div>
          <div className="flex flex-col justify-center w-3/4">
            <p className="ml-3 text-xl">{t.titleTask}</p>
            <p className="ml-3 text-sm">{t.description}</p>
          </div>
        </li>
      </ol>
    </>
  );
};

export default Task;
