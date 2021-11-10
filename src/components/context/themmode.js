import React, { useState, createContext } from 'react'
const localMode = localStorage.mode === "true" ? true : false;

const ThemeModeContext = createContext({
    isDark: false,
    setMode: () => { },
})

const ModeProvider = ({ children }) => {

    /*eslint-disable */

    const setMode = () => {
        setIsDark(prevState => {
            localStorage.mode = !prevState.isDark;
            return {
                ...prevState,
                isDark: !prevState.isDark
            }
        })
    }

    const modeState = {
        isDark: localMode,
        setMode
    }

    const [isDark, setIsDark] = useState(modeState)

    /*eslint-enable */

    return (
        <ThemeModeContext.Provider value={isDark}>
            {children}
        </ThemeModeContext.Provider>
    )
}

export { ThemeModeContext, ModeProvider }