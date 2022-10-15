import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="py-10 flex justify-center">
          <Link className="text-center font-bold text-white" to="/">Medrano Vázquez Eduardo Emir - {''}
              <span className="text-indigo-200">20212417</span>
          </Link>
    </footer>
  )
}

export default Footer