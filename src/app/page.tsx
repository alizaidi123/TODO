


import Image from "next/image";
import Addtask from "./Components/Addtask";
import TaskTab from "./Components/TaskTab";
import { GetAll } from "../../api";


export default async function Home() {
  const task = await GetAll()
  return (
    <main className="max-w-4xl mx-auto my-6 items-center text-center flex flex-col gap-4">
      <div className="flex flex-col w-full justify-center  items-center font-serif">
        <h1 className="font-bold text-4xl text-center py-2 text-black">Todo List App</h1>
      </div>
      <Addtask/>
      <TaskTab task={task}/>

    </main>
    
  );
}
