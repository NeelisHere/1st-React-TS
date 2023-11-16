import { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext } from "react";

type ThemeType = 'light' | 'dark'

interface ThemeContextProviderProps {
	theme: ThemeType,
	// setTheme: (newTheme: ThemeType) => void
	setTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProviderProps | null>(null)

// export const useTheme = (): ThemeContextProviderProps|undefined => useContext(ThemeContext)
export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
}

export const ThemeContextProvider = ({ children }:{ children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};