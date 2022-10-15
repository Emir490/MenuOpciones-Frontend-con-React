import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({});

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const { msg } = alert;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const { data } = await clientAxios.post('/home', { name });
        
        // Guardar nombre para no volver a preguntar al usuario
        localStorage.setItem("name", data.name)

        setAuth(data)

        navigate('/options');
    } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true
        })

        setTimeout(() => {
          setAlert({})
        }, 3000);
    }
  }

  return (
    <div className="lg:w-1/5">
      <h1 className="text-white text-center font-bold text-2xl">Tu nombre</h1>
      <div className="mt-5 bg-slate-800 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <input
            className="block w-full rounded-xl p-3 bg-gradient-to-r from-slate-900 to-gray-900 text-white"
            type="text"
            placeholder="Escribe tu nombre"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="block rounded-xl py-2 px-5 bg-indigo-900 text-white font-bold hover:bg-indigo-700 hover:cursor-pointer mx-auto w-full mt-5 transition-colors"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
      {msg && <Alert alert={alert} />}
    </div>
  );
};

export default Login;
