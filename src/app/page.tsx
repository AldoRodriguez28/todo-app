import React from 'react';
import TaskList from '../components/TaskList';
import ThemeToggle from '@/components/ThemeToggle';
import AppDescription from '@/components/AppDescripcion';


export default function Home() {
  return (
    <div >
      <ThemeToggle />
      <AppDescription/>
      <TaskList />
    </div>
  );
}
