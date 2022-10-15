import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex justify-center items-center mx-auto pt-96">
        <Outlet/>
    </main>
  )
}

export default AuthLayout