import React from 'react'
import { useState, useEffect, createContext } from 'react'
import clientAxios from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authenticateUser = async () => {
            const name = localStorage.getItem("name");

            if (!name) {
                setLoading(false);
                return;
            }

            try {
                const { data } = await clientAxios("/options");
                setAuth(data);
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({})
            }
        }
        authenticateUser()
        setLoading(false)
    }, [])
  return (
    <AuthContext.Provider
        value={{
            auth,
            setAuth,
            loading,
            setLoading
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }

export default AuthContext;