'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, updateTask, setTasks } from '../app/store/taskSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';


const TaskList = () => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const tasks = useSelector(state => state.tasks.tasks) ?? [];
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');


    useEffect(() => {
        setMounted(true);
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
        if (savedTasks.length > 0) {
            dispatch(setTasks(savedTasks));

        }
    }, [dispatch]);

    useEffect(() => {
        if (tasks.length === 0) {
            localStorage.removeItem("tasks");
        } else {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    const resolvedTheme = useMemo(() => mounted ? theme ?? systemTheme ?? 'dark' : 'dark', [mounted, theme, systemTheme]);


    const handleAddTask = useCallback(() => {
            if (newTask.trim() !== '') {
                dispatch(addTask({ id: crypto.randomUUID(), title: newTask, status: false }));
                setNewTask('');
            }
        }
    ,[dispatch, newTask]);

    const handleKeyPress =useCallback((e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    },[handleAddTask]);
     

    const handleUpdateTask = useCallback((task) => {
        dispatch(updateTask({ id: task.id, status: !task.status }));
    },[dispatch]);
  

    return (
        <div className={`min-h-6 mb-6 flex  justify-center ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-lg p-8 rounded-xl shadow-2xl border border-gray-700 ${resolvedTheme === 'dark' ? 'bg-gray-900':'bg-gray-100'}`}
            >
                <h2 className={`text-3xl font-bold text-center mb-6 ${resolvedTheme === 'dark' ? 'text-white':'text-gray-500' }`}>Lista de Tareas 🚀</h2>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input 
                        type="text" 
                        placeholder="Ingresa una nueva tarea" 
                        value={newTask} 
                        onChange={(e) => setNewTask(e.target.value)} 
                        onKeyDown={handleKeyPress}
                        className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${resolvedTheme === 'dark' ? 'text-gray-100':'text-gray-800'}`}
                    />
                    <button 
                        onClick={handleAddTask} 
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all w-full sm:w-auto `}
                    >
                        Agregar
                    </button>
                </div>
                <ul className="space-y-3">
                    <AnimatePresence>
                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <motion.li 
                                    key={task.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex justify-between items-center p-4  rounded-lg shadow-md border border-gray-600 ${resolvedTheme === 'dark' ? 'bg-gray-800 ':'bg-gray-200' }`}
                                >
                                    <input
                                        id={task.id}
                                        type="checkbox"
                                        checked={task.status}
                                        onChange={() => handleUpdateTask(task)}
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor={task.id} className={`flex-1 text-lg mx-4  ${task.status ? `line-through ${resolvedTheme === 'dark' ? 'text-gray-500':'text-gray-500'} `: `${resolvedTheme === 'dark' ? 'text-gray-100':'text-gray-800'}`}`}>{task.title}</label>
                                    <button onClick={() => dispatch(removeTask(task.id))} className="text-red-500 hover:text-red-700">❌</button>
                                </motion.li>
                            ))
                        ) : (
                            <p className="text-gray-400 text-center">No hay tareas aún. ¡Agrega una! ✨</p>
                        )}
                    </AnimatePresence>
                </ul>
            </motion.div>
        </div>
    );
};

export default TaskList;
