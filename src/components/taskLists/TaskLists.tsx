import React from "react"
import { DeleteIcon, UpdateIcon } from "../atomic/Buttons/Buttons"

const getAllTasks = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/task", {
      cache: "no-store",
    })
    if (!response.ok) {
      throw new Error("failed to fetch the tasks")
    }
    return response.json()
  } catch (error) {
    console.log("Error in loading tasks from mongoose")
  }
}

const TaskLists = async () => {
  const todos = await getAllTasks()
  return (
    <>
      {todos?.tasks?.map((items: any, index: number) => {
        return (
          <div
            className="flex justify-between items-start border border-slate-300 my-2 px-4 py-2"
            key={index}
          >
            <div>
              <h2 className="font-bold">{items.title}</h2>
              <div>{items.description}</div>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-8">
              <UpdateIcon id={items._id} />
              <DeleteIcon id={items._id} title={items.title} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default TaskLists
