import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { auth, loading } = useAuth();
  const name = localStorage.getItem("name");
  if (loading) return "cargando..."

  return (
    <>
      <Header/>
        {auth?.name || name? (
          <main className='container mx-auto mt-5 md:mt-10 p-3 md:p-0 text-white'>
            <Outlet />
          </main>
        ) : <Navigate to="/" />}
      <Footer/>
    </>
  )
}

export default ProtectedRoute