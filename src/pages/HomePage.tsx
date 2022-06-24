import { useState } from 'react';
import { ContactList } from '../components/contact/ContactList';
import { Header } from '../components/header/Header';
import { TaskList } from '../components/TaskList';
import { ComponentA } from '../ejercicios123/ComponentA';
import { Clock } from '../exercises456/Clock';
import { Task } from '../interfaces/Task';
import { MiComponenteConContexto } from '../lesson456/UseContext';

const listaTareas: Task[] = [
   {
      id: '1',
      name: 'task 1',
      desc: 'abrir el canio',
      level: 'normal',
      completed: false,
   },
   {
      id: '2',
      name: 'task 2',
      desc: 'dormir bien',
      level: 'normal',
      completed: false,
   },
];
export const HomePage = () => {
   const [isMounted, setIsMounted] = useState(true);
   const handleClick = () => {
      setIsMounted(!isMounted);
   };
   return (
      <div className="bg-slate-50 h-screen">
         <main>
            <div className="flex w-auto place-content-center">
               {/* <ComponentA /> */}
               {/* <MiComponenteConContexto /> */}

               {isMounted && <Clock />}
               
               <div className="mt-5 ml-2">
                  <button
                     className="p-2 rounded-md border shadow-md text-orange-500 shadow-orange-300 hover:shadow-none hover:bg-orange-300 hover:text-slate-100 transition-all"
                     onClick={handleClick}
                  >
                     desmontar
                  </button>
               </div>
            </div>
         </main>
      </div>
   );
};
