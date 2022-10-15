import { useState } from "react";
import Alert from "../components/Alert";
import useOptions from "../hooks/useOptions";

const Triangle = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [side, setSide] = useState("");
  const [alert, setAlert] = useState({});

  const { msg } = alert;
  const { area, perimeter, triangle } = useOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await triangle(side, base, height);

    setAlert(result)
    setBase("");
    setHeight("");
    setSide("");

    setTimeout(() => {
      setAlert({})
    }, 3000);
  }

  return (
    <div className="lg:w-1/2 mx-auto">
      <h1 className="text-white text-center font-bold text-2xl uppercase">Triángulo</h1>
      <div className="md:grid grid-cols-2 mt-5 bg-slate-800 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <label className="text-gray-200 font-bold uppercase px-1" htmlFor="base">
            Base
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1 mb-5"
            type="text"
            placeholder="Escribe la base"
            name="base"
            value={base}
            onChange={e => setBase(e.target.value)}
          />

          <label className="text-gray-200 font-bold uppercase px-1" htmlFor="height">
            Altura
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mb-5 mt-1"
            type="text"
            name="height"
            placeholder="Escribe la altura"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />

          <label className="text-gray-200 font-bold uppercase px-1" htmlFor="side">
            Lado
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1"
            type="text"
            name="side"
            placeholder="Escribe la altura"
            value={side}
            onChange={e => setSide(e.target.value)}
          />

          <input
            className="block rounded-xl py-2 px-5 bg-indigo-900 text-white font-bold hover:bg-indigo-700 hover:cursor-pointer mx-auto w-full mt-5 transition-colors"
            type="submit"
            value="Calcular"
          />
        </form>
        <div>
          {area && perimeter ? 
          (
            <div className="flex flex-col justify-center items-center mt-32">
              <p className="text-white text-xl uppercase font-bold mb-2">Área: {''} <span className="text-indigo-200 font-bold">{area}</span></p>
              <p className="text-white uppercase text-xl font-bold">Perímetro: {''} <span className="text-indigo-200 font-bold">{perimeter}</span></p>
            </div>
          ) :
          (
            <p className="text-white text-center mt-32">El resultado aparecerá aquí</p>
          )}
        </div>
      </div>
      {msg && <Alert alert={alert} />}
    </div>
  )
}

export default Triangle