import home from "./Imagenes/home.png";
import notificacion from "./Imagenes/notificacion.png";
import calendario from "./Imagenes/calendario.png";
import usuario from "./Imagenes/usuario.png";

const Footer = () => {
  return (
    <>
      <div className="flex w-full bg-blue-300" style={{ height: "65px" }}>
        <div className="flex justify-center w-1/4 mt-4">
          <img className="w-10 h-10" src={home} alt="Icono home" />
        </div>
        <div className="flex justify-center w-1/4 mt-4">
          <img className="w-10 h-10" src={notificacion} alt="Icono home" />
        </div>
        <div className="flex justify-center w-1/4 mt-4">
          <img className="w-10 h-10" src={calendario} alt="Icono home" />
        </div>
        <div className="flex justify-center w-1/4 mt-4">
          <img className="w-10 h-10" src={usuario} alt="Icono home" />
        </div>
      </div>
    </>
  );
};

export default Footer;
