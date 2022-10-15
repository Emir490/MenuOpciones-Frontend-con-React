import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";

const OptionsContext = createContext();

export const OptionsProvider = ({children}) => {
    const [area, setArea] = useState("");
    const [perimeter, setPerimeter] = useState("");
    const [length, setlength] = useState("");
    const [word1, setWord1] = useState("");
    const [words, setWords] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            try {
                const { data } = await clientAxios('/options/5');

                setWords(data);
            } catch (error) {
                console.log(error.response.data.msg);
            }
        }
        getList();
    }, [])

    const square = async side => {
        try {
            const { data } = await clientAxios.post('/options/1', { side });
            
            const { area, perimeter } = data;

            setArea(area);
            setPerimeter(perimeter);

            return {
                msg: "Calculado correctamente",
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const rectangle = async (base, height) => {
        try {
            const { data } = await clientAxios.post('/options/2', { base, height });
            
            const { area, perimeter } = data;

            setArea(area);
            setPerimeter(perimeter);

            return {
                msg: "Calculado correctamente",
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const triangle = async (side, base, height) => {
        try {
            const { data } = await clientAxios.post('/options/3', { side, base, height });
            
            const { area, perimeter } = data;

            setArea(area);
            setPerimeter(perimeter);

            return {
                msg: "Calculado correctamente",
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const count = async word => {
        try {
            const { data } = await clientAxios.post('/options/4', { word });
            
            const { length } = data;

            setlength(length);
            setWord1(word);

            return {
                msg: `Palabra ${word} contada`
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const modify = async (word, position) => {
        try {
            const { data } = await clientAxios.put('/options/5', { word, position });
            
            setWords(data);

            return {
                msg: "Lista modificada correctamente"
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const validate = async input => {
        try {
            const { data } = await clientAxios.post('/options/6', { input });
            
            return {
                msg: `${data.msg}`
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const iterateList = async (word1, word2, word3, word4, word5) => {
        try {
            const { data } = await clientAxios.post('/options/7', { word1, word2, word3, word4, word5 });

            setList(data);
            
            return {
                msg: "Lista agregada correctamente"
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    return (
        <OptionsContext.Provider
            value={{
                area, 
                perimeter, 
                length,
                word1,
                words,
                list,
                square,
                rectangle,
                triangle,
                count,
                modify,
                validate,
                iterateList
            }}
        >
            {children}
        </OptionsContext.Provider>
    )
}

export default OptionsContext;