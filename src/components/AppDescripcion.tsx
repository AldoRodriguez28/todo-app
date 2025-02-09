'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';


const AppDescription = () => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    const resolvedTheme = useMemo(() => mounted ? theme ?? systemTheme ?? 'dark' : 'dark', [mounted, theme, systemTheme]);
    
    useEffect(()=>{
        setMounted(true);
    },[]);
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-11 w-full p-8  mx-auto shadow-lg transition-all duration-300 text-center
                ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}
            `}
        >
            <h1 className="text-4xl font-extrabold mb-6">🚀 To-Do App Avanzada</h1>
            <p className="text-lg mb-6">
                Una aplicación moderna de gestión de tareas, optimizada para una experiencia fluida y eficiente con tecnologías de última generación.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.05 }} className={`p-4 rounded-lg border border-gray-600 text-left ${resolvedTheme === 'dark' ? 'bg-gray-900':'bg-gray-100'}`}>
                    <h3 className="text-xl font-semibold">⚡ Redux Toolkit</h3>
                    <p>Manejo global del estado eficiente y escalable.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className={`p-4 rounded-lg border border-gray-600 text-left ${resolvedTheme === 'dark' ? 'bg-gray-900':'bg-gray-100'}`}>
                    <h3 className="text-xl font-semibold">🌗 Dark Mode</h3>
                    <p>Soporte para temas claro y oscuro con persistencia automática.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className={`p-4 rounded-lg border border-gray-600 text-left ${resolvedTheme === 'dark' ? 'bg-gray-900':'bg-gray-100'}`}>
                    <h3 className="text-xl font-semibold">🎯 Performance</h3>
                    <p>Uso de UseMemo y UseCallback para mejorar el rendimiento en la aplicacion.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className={`p-4 rounded-lg border border-gray-600 text-left ${resolvedTheme === 'dark' ? 'bg-gray-900':'bg-gray-100'}`}>
                    <h3 className="text-xl font-semibold">🎬 Framer Motion</h3>
                    <p>Animaciones fluidas para una experiencia interactiva.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className={`p-4 rounded-lg border border-gray-600 text-left  ${resolvedTheme === 'dark' ? 'bg-gray-900':'bg-gray-100'}`}>
                    <h3 className="text-xl font-semibold">⚛️ Next.js & React</h3>
                    <p>Arquitectura modular optimizada para SSR y CSR.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className={`p-4 rounded-lg border border-gray-600 text-left ${resolvedTheme === 'dark' ? 'bg-gray-900':'bg-gray-100'}`}>
                    <h3 className="text-xl font-semibold">💾 Persistencia de Datos</h3>
                    <p>Las tareas se almacenan localmente para evitar pérdida de información.</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AppDescription;
