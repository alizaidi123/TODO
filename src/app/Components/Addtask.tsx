"use client";

import { RiAddFill } from "react-icons/ri";
import Modal from "./Modal";
import { FormEventHandler, use, useState } from "react";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";
const Addtask = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTask, setnewTask] = useState<string>("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: "3",
      text: newTask, 
    });
    setnewTask("");
    setModalOpen(false);
    router.refresh()
  };
  return (
    <div className="w-full">
      <button
        onClick={() => setModalOpen(true)}
        className="btn w-full bg-blue-400 font-serif text-2xl text-white font-light"
      >
        {" "}
        Add New Task
        <RiAddFill />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-semibold font-serif text-lg"> Add New Task</h3>
          <div className="modal-action">
            <input
              value={newTask}
              onChange={(e) => setnewTask(e.target.value)}
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
  );
};

export default Addtask;
