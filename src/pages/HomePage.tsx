import { ContactList } from "../components/contact/ContactList"
import { Header } from "../components/header/Header"
import { TaskList } from "../components/TaskList"
import { Task } from "../interfaces/Task"

const listaTareas:Task[] = [
   {
      id: '1',
      name: 'task 1',
      desc: 'abrir el canio',
      level: "normal",
      completed: false
   },
   {
      id: '2',
      name: 'task 2',
      desc: 'dormir bien',
      level: "normal",
      completed: false
   },
]
export const HomePage = () => {
   return (
      <div className="bg-slate-50 h-screen">
         <Header />
         <main>
            <TaskList tasks={ listaTareas }/>

            <div className="flex w-auto place-content-center">
               <ContactList />
            </div>
         </main>
      </div>
   )
}