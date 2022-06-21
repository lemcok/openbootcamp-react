import { Task } from "../interfaces/Task"

interface props {
   task: Task
}
export const TaskItem = ({ task }:props) => {
   return (
      <div className="border shadow p-3 rounded-xl bg-white">
         <h2 className="underline text-sky-500 hover:text-sky-600">{ task.name }</h2>
         <h3>{ task.desc }</h3>
         <h4>{ task.level }</h4>
         <h5> This task is: { task.completed ? 'COMPLETED' : 'PENDING' }</h5>
      </div>
   )
}