import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const Header = () => {
  const { auth } = useAuth();
  const { name } = auth;

  return (
    <header className="pt-5 md:pt-7">
      <Link className="text-white flex justify-center text-center font-bold uppercase text-2xl" to="/options">Bienvenido {""}
        <span className="text-indigo-200 px-2">{name}</span>
      </Link>
    </header>
  )
}

export default Header