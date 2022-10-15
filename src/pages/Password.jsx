import { useState } from "react";
import Alert from "../components/Alert";
import useOptions from "../hooks/useOptions";

const Password = () => {
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const { msg } = alert;

  const { validate } = useOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await validate(password);

    setAlert(result);
    setPassword("");
  }

  return (
    <div className="lg:w-1/3 md:w-1/2 mx-auto">
      <h1 className="text-white text-center font-bold text-2xl">Comprobar contraseña</h1>
      <div className="mt-5 bg-slate-800 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <input
            className="block w-full rounded-xl p-3 bg-gradient-to-r from-slate-900 to-gray-900 text-white"
            type="text"
            placeholder="Escribe tu contraseña"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            className="block rounded-xl py-2 px-5 bg-indigo-900 text-white font-bold hover:bg-indigo-700 hover:cursor-pointer mx-auto w-full mt-5 transition-colors"
            type="submit"
            value="Validar"
          />
        </form>
      </div>
      {msg && <Alert alert={alert} />}
    </div>
  )
}

export default Password