import { useState } from "react";
import Alert from "../components/Alert";
import useOptions from "../hooks/useOptions";

const Words = () => {
  const [word, setWord] = useState("");
  const [position, setPosition] = useState("");
  const [alert, setAlert] = useState({});

  const { msg } = alert;
  const { words, modify } = useOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await modify(word, position);
    setAlert(result);
    setWord("");
    setPosition("");

    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  return (
    <div className="lg:w-1/2 mx-auto">
      <h1 className="text-white text-center font-bold text-2xl uppercase">
        Modificar Lista
      </h1>
      <div className="md:grid grid-cols-2 mt-5 bg-slate-800 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <label
            className="text-gray-200 font-bold uppercase px-1"
            htmlFor="word"
          >
            Palabra
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1 mb-5"
            type="text"
            placeholder="Escribe una palabra"
            name="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <label
            className="text-gray-200 font-bold uppercase px-1"
            htmlFor="position"
          >
            Posición en la lista
          </label>

          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1"
            type="text"
            name="position"
            placeholder="Posición en qué se añadirá la palabra"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />

          <input
            className="block rounded-xl py-2 px-5 bg-indigo-900 text-white font-bold hover:bg-indigo-700 hover:cursor-pointer mx-auto w-full mt-5 transition-colors"
            type="submit"
            value="Modificar"
          />
        </form>
        <div className="flex flex-col justify-center items-center">
              {words.map((word, index) => {
                return (
                  <p key={index}>{word}</p>
                );
              })}
        </div>
      </div>
      {msg && <Alert alert={alert} />}
    </div>
  );
};

export default Words;
