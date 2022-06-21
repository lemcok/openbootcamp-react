import { Task } from "../interfaces/Task"
import { TaskItem } from "./TaskItem"

interface props {
   tasks: Task[]
}
export const TaskList = ({ tasks }:props) => {
   return (
      <div className="p-4 grid gap-3">
         { tasks.map( task => (
            <TaskItem task={task} key={task.id} />
         ) ) }
      </div>
   )
}
