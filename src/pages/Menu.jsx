import { Link } from "react-router-dom";
import square from "../img/cuadrado.jpg";
import rectangle from "../img/rectangle.jpg";
import triangle from "../img/triangle.jpg";
import count from "../img/count.webp";
import word from "../img/word.jpg";
import password from "../img/password.jpg";
import loop from "../img/loop.jpg";

const Menu = () => {
  return (
    <>
      <div className='grid md:grid-cols-3 md:h-64 gap-3'>
        <Link className="relative group hover:cursor-pointer overflow-hidden rounded-lg bg-black" to="/options/1">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={square} />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="lg:block flex flex-row items-center justify-center absolute bg-gradient-to-tr from-black w-full h-full transform duration-500 md:inset-y-full md:group-hover:inset-y-0 lg:group-hover:inset-y-44 inset-y-32">
            <div className="absolute w-full flex place-content-center mb-10 lg:m-0">
              <p className="capitalize font-bold text-xl text-center shadow-2xl text-white">Cuadrado</p>
            </div>
            <div className="absolute w-full flex place-content-center mt-10 lg:mt-5">
              <p className="text-center w-4/5 text-white lg:mt-5">Calcular área y perímetro del cuadrado</p>
            </div>
          </div>
        </Link>

        <Link className="relative group hover:cursor-pointer overflow-hidden rounded-lg bg-black" to="/options/2">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={rectangle} />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="lg:block flex flex-row items-center justify-center absolute bg-gradient-to-tr from-black w-full h-full transform duration-500 md:inset-y-full md:group-hover:inset-y-0 lg:group-hover:inset-y-44 inset-y-32">
            <div className="absolute w-full flex place-content-center mb-10 lg:m-0">
              <p className="capitalize font-bold text-xl text-center shadow-2xl text-white">Rectángulo</p>
            </div>
            <div className="absolute w-full flex place-content-center mt-10 lg:mt-5">
              <p className="text-center w-4/5 text-white lg:mt-5">Calcular área y perímetro del rectángulo</p>
            </div>
          </div>
        </Link>

        <Link className="relative group hover:cursor-pointer overflow-hidden rounded-lg bg-black" to="/options/3">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={triangle} />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="lg:block flex flex-row items-center justify-center absolute bg-gradient-to-tr from-black w-full h-full transform duration-500 md:inset-y-full md:group-hover:inset-y-0 lg:group-hover:inset-y-44 inset-y-32">
            <div className="absolute w-full flex place-content-center mb-10 lg:m-0">
              <p className="capitalize font-bold text-xl text-center shadow-2xl text-white">Triángulo</p>
            </div>
            <div className="absolute w-full flex place-content-center mt-10 lg:mt-5">
              <p className="text-center w-4/5 text-white lg:mt-5">Calcular área y perímetro del triángulo</p>
            </div>
          </div>
        </Link>
      </div>

      <div className='grid md:grid-cols-2 md:h-96 gap-3 mt-3'>
      <Link className="relative group hover:cursor-pointer overflow-hidden rounded-lg bg-black" to="/options/4">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={count} />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="flex flex-row items-center justify-center absolute bg-gradient-to-tr from-black w-full h-full transform duration-500 md:inset-y-full md:group-hover:inset-y-0 inset-y-32">
            <div className="absolute w-full mb-10">
              <p className="capitalize font-bold text-xl text-center shadow-2xl text-white">Contar</p>
            </div>
            <div className="absolute w-full mt-10">
              <p className="text-center text-white">Contar letras de una palabra</p>
            </div>
          </div>
        </Link>

        <Link className="relative group hover:cursor-pointer overflow-hidden rounded-lg bg-black" to="/options/5">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={word} />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="flex flex-row items-center justify-center absolute bg-gradient-to-tr from-black w-full h-full transform duration-500 md:inset-y-full md:group-hover:inset-y-0 inset-y-32">
            <div className="absolute w-full mb-10">
              <p className="capitalize font-bold text-xl text-center shadow-2xl text-white">Modificar Lista</p>
            </div>
            <div className="absolute w-full mt-10">
              <p className="text-center text-white">Imprimir una lista de 10 palabras y modificar la palabra que desees</p>
            </div>
          </div>
        </Link>

        <Link className="relative group hover:cursor-pointer overflow-hidden rounded-lg bg-black" to="/options/6">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={password} />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="flex flex-row items-center justify-center absolute bg-gradient-to-tr from-black w-full h-full transform duration-500 md:inset-y-full md:group-hover:inset-y-0 inset-y-32">
            <div className="absolute w-full mb-10">
              <p className="capitalize font-bold text-xl text-center shadow-2xl text-white">Contraseña</p>
            </div>
            <div className="absolute w-full mt-10">
              <p className="text-center text-white">Validar si la contraseña es correcta</p>
            </div>
          </div>
        </Link>

        <Link className="relative group hover:cursor-pointer overflow-hidden rounded-lg bg-black" to="/options/7">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={loop} />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="flex flex-row items-center justify-center absolute bg-gradient-to-tr from-black w-full h-full transform duration-500 md:inset-y-full md:group-hover:inset-y-0 inset-y-32">
            <div className="absolute w-full mb-10">
              <p className="capitalize font-bold text-xl text-center shadow-2xl text-white">Capturar lista</p>
            </div>
            <div className="absolute w-full mt-10">
              <p className="text-center text-white">Capturar 5 palabras e imprmirlas</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Menu