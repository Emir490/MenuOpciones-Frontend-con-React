import { useState } from "react";
import Alert from "../components/Alert";
import useOptions from "../hooks/useOptions";

const Loop = () => {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");
  const [word5, setWord5] = useState("");
  const [alert, setAlert] = useState({});

  const { msg } = alert;
  const { list, iterateList } = useOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await iterateList(word1, word2, word3, word4, word5);
    setAlert(result);
    setWord1("");
    setWord2("");
    setWord3("");
    setWord4("");
    setWord5("");

    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  return (
    <div className="lg:w-1/2 mx-auto">
      <h1 className="text-white text-center font-bold text-2xl uppercase">
        Recorrer Lista
      </h1>
      <div className="md:grid grid-cols-2 mt-5 bg-slate-800 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <label
            className="text-gray-200 font-bold uppercase px-1"
            htmlFor="word1"
          >
            Palabra 1
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1 mb-5"
            type="text"
            placeholder="Escribe una palabra"
            name="word1"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
          />

          <label
            className="text-gray-200 font-bold uppercase px-1"
            htmlFor="word2"
          >
            Palabra 2
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1 mb-5"
            type="text"
            placeholder="Escribe una palabra"
            name="word2"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
          />

          <label
            className="text-gray-200 font-bold uppercase px-1"
            htmlFor="word3"
          >
            Palabra 3
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1 mb-5"
            type="text"
            placeholder="Escribe una palabra"
            name="word3"
            value={word3}
            onChange={(e) => setWord3(e.target.value)}
          />

          <label
            className="text-gray-200 font-bold uppercase px-1"
            htmlFor="word4"
          >
            Palabra 4
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1 mb-5"
            type="text"
            placeholder="Escribe una palabra"
            name="word4"
            value={word4}
            onChange={(e) => setWord4(e.target.value)}
          />

          <label
            className="text-gray-200 font-bold uppercase px-1"
            htmlFor="word5"
          >
            Palabra 5
          </label>
          <input
            className="block w-full rounded-xl p-3 text-white bg-gradient-to-r from-slate-900 to-gray-900 mt-1 mb-5"
            type="text"
            placeholder="Escribe una palabra"
            name="word5"
            value={word5}
            onChange={(e) => setWord5(e.target.value)}
          />

          <input
            className="block rounded-xl py-2 px-5 bg-indigo-900 text-white font-bold hover:bg-indigo-700 hover:cursor-pointer mx-auto w-full mt-5 transition-colors"
            type="submit"
            value="Recorrer"
          />
        </form>
        <div className="flex flex-col justify-center items-center">
              <p className="font-black uppercase">Comienzo</p>
              {list.map((word, index) => {
                return (
                  <p key={index}>Hola. Ahora i vale <span className="font-bold">{word}</span></p>
                );
              })}
              <p className="font-black uppercase">Final</p>
        </div>
      </div>
      {msg && <Alert alert={alert} />}
    </div>
  )
}

export default Loop