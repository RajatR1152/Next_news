'use client'
import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {

    const [category, setCategory] = useState('buisness');
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [userData, setUserData] = useState([]);

    return (
        <Context.Provider value={{ category, setCategory, count, setCount, loading, setLoading, userData, setUserData,isLogedIn, setIsLogedIn }}>
            {children}
        </Context.Provider>
    )
}

