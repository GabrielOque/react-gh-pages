import perfil from "./Imagenes/perfil.png"; // with import
import Cards from "./Cards";
const Header = ({ isHeader, setIsHeader }) => {
  return (
    <div className="w-full h-screen">
      <div className="flex pt-8 pl-6 pr-6 bg-blue-300 h-36">
        <div className="w-4/5">
          <p className="text-white">Agust 19, 2022</p>
          <p className="pt-2 text-2xl font-bold text-indigo-500">
            Good Day Gabriel
          </p>
        </div>
        <div className="w-1/5">
          <div>
            <img src={perfil} alt="perfil-del-header" />
          </div>
        </div>
      </div>
      <div className="mt-6 mr-6 ml-7">
        <p className="text-2xl font-bold text-indigo-700">PROJECT</p>
        <div className="grid grid-cols-2 ">
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Header;
