"use client"

import { usePathname } from 'next/navigation'
import React, { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
    const location = usePathname()
    const [isAuthLayout, setIsAuthLayout] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        if (hasMounted) {
            setIsAuthLayout(location !== '/')
        }
    }, [location, hasMounted])

    if (!hasMounted) return null

    return (
        <GlobalContext.Provider value={{ isAuthLayout }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
