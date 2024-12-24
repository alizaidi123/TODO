"use client";

import { FormEventHandler, useReducer, useState } from "react";
import { ITask } from "../../../types/task"
import { GrEdit } from "react-icons/gr";
import { IoTrashBinOutline } from "react-icons/io5";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api";


interface TaskProps {
    task: ITask

}

const Tasks: React.FC<TaskProps> = ({task}) => {
    const router = useRouter()
    const[openModelEdit, setopenModelEdit] = useState<boolean>(false)
    const[openModelDelete, setopenModelDelete] = useState<boolean>(false)
    const [ tasktoEdit, setTasktoEdit] = useState<string>(task.text)
    const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
          id: task.id,
          text: tasktoEdit, 
        });
        setTasktoEdit("");
        setopenModelEdit(false);
        router.refresh()
      };
      const handleDeleteTask = async (id: string) => {
        await deleteTodo(id)
        setopenModelDelete(false)
        router.refresh()
      }
   
  return (
    <tr key={task.id}>
        <td className="w-full font-serif font-medium text-gray-700">{task.text}</td>
        <td className="flex flex-row space-x-5">
        <div  className="text-blue-600 cursor-pointer"> <button onClick={()=> setopenModelEdit(true)}> <GrEdit size={19} /></button> 
        <Modal modalOpen={openModelEdit} setModalOpen={setopenModelEdit}>
        <form onSubmit={handleSubmitEdit}>
          <h3 className="font-semibold font-serif text-lg items-center">Edit</h3>
          <div className="modal-action">
            <input
              value={tasktoEdit}
              onChange={(e) => setTasktoEdit(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
          </div>
          <br />
          <button type="submit" className="btn font-serif">
            Submit
          </button>
        </form>
      </Modal>  
        </div>
        <div className="text-red-500 cursor-pointer "><button onClick={() => setopenModelDelete(true)}> <IoTrashBinOutline size={19} /></button></div>
        <Modal modalOpen={openModelDelete} setModalOpen={setopenModelDelete}>
          <h3>
            Are you sure, you want to delete this task?
          </h3>
          <div className=" modal-action">
            <button className="btn" onClick={ () => handleDeleteTask(task.id)}>Yes</button>
          </div>

      </Modal>
        </td>
      </tr>
  )
}

export default Tasks
