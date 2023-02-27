import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../style/themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [montedComponent, setMountedComponent] = useState(false);
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    const toggleTheme = () => {
        theme === "light" ? setMode("dark") : setMode("light");
    };

    const setMode = (mode) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : setMode("light");
        setMountedComponent(true);
    }, []);

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme, themeMode, montedComponent }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
