import { useState } from "react";
import Alert from "../components/Alert";
import useOptions from "../hooks/useOptions";

const Count = () => {
  const [word, setWord] = useState("");
  const [alert, setAlert] = useState({});

  const { msg } = alert;
  const { length, word1, count } = useOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await count(word);
    setAlert(result);
    setWord("");

    setTimeout(() => {
      setAlert({});
    }, 3000);
  }

  return (
    <div className="lg:w-1/2 mx-auto">
      <h1 className="text-white text-center font-bold text-2xl uppercase">
        Contar una palabra
      </h1>
      <div className="md:grid grid-cols-2 mt-5 bg-slate-800 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <label className="text-gray-200 font-bold uppercase px-1" htmlFor="word">
            Palabra
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1"
            type="text"
            placeholder="Escribe una palabra"
            name="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <input
            className="block rounded-xl py-2 px-5 bg-indigo-900 text-white font-bold hover:bg-indigo-700 hover:cursor-pointer mx-auto w-full mt-5 transition-colors"
            type="submit"
            value="Contar"
          />
        </form>
        <div>
          {length ? (
            <div className="flex flex-col justify-center items-center mt-14">
              <p className="text-white text-xl text-center uppercase font-bold mb-2">
                {word1} tiene : {" "}
                <span className="text-indigo-200 font-bold">{length}</span>
                {" "} letras
              </p>
            </div>
          ) : (
            <p className="text-white text-center mt-14">
              El resultado aparecerá aquí
            </p>
          )}
        </div>
      </div>
      {msg && <Alert alert={alert} />}
    </div>
  )
}

export default Count