import { ITask } from "../../../types/task"
import Tasks from "./Tasks"

interface TodosProps {
    task: ITask[]
}

const TaskTab: React.FC<TodosProps> = ({task}) => {
  return (
    <div className="w-full items-center">
      <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr className="font-serif text-gray-700 font-medium text-lg">
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {task.map(task => 
       <Tasks key={task.id} task={task}/>

      )}

    </tbody>
    
  
  </table>
</div>
    </div>
  )
}

export default TaskTab
