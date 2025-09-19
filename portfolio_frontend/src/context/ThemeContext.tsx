import { createContext, useEffect, useState, useContext } from "react";
import type { PropsWithChildren } from "react";

type ThemeContextValue = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        } else {
            const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = preferDark ? "dark" : "light";
            setTheme(initial);
            document.documentElement.classList.toggle("dark", preferDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme: "light" | "dark" = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


