import perfil from "./Imagenes/perfil.png"; // with import
const Header = () => {
  return (
    <div className="flex pl-6 pr-6 bg-blue-300 h-30">
      <div className="w-4/5 pt-4 pb-4">
        <p className="text-white">Agust 19, 2022</p>
        <p className="text-2xl font-bold text-indigo-500 ">
          ¡Good Day Gabriel!
        </p>
      </div>
      <div className="w-1/5">
        <div className="pt-2">
          <img src={perfil} alt="perfil-del-header" />
        </div>
      </div>
    </div>
  );
};

export default Header;
