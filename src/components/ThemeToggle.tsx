"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Asegurar que se monta solo en el cliente
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Evitar hidratación incorrecta

    return (
        <nav className="w-full bg-gray-900 text-white p-4 shadow-lg fixed top-0 left-0 z-50 flex justify-between items-center px-6">
            <h1 className="text-xl font-bold">🌟 To-Do App {theme}</h1>
            <button
                className="p-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all flex items-center gap-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
            </button>

        </nav>
    );
};

export default ThemeToggle;
