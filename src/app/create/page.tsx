"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

const CreateTask = () => {
  const [title, setTitle] = useState("")
  const [description, setDesc] = useState("")
  const router = useRouter()

  const handlSubmit = async (e: any) => {
    e.preventDefault()
    if (!title || !description) {
      alert("The title and description should not be empty.")
      return
    }
    try {
      const res = await fetch("http://localhost:3000/api/task/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.push("/")
        router.refresh()
      } else {
        throw new Error("Failed to create task")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handlSubmit} className="flex flex-col gap-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter task title"
        required
        className="w-full sm:w-[50%] py-2 px-4 border border-slate-300 rounded-sm focus:outline-none focus:border-sky-500"
      />
      <input
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        placeholder="Enter task description"
        className="w-full sm:w-[50%] py-2 px-4 border border-slate-300 rounded-sm focus:outline-none focus:border-sky-500"
      />
      <button
        type="submit"
        className="border border-sky-500 rounded-sm hover:border-none  hover:bg-sky-500 hover:text-white hover:transition-all hover:delay-150 w-fit px-4 py-2"
      >
        Create Task
      </button>
    </form>
  )
}

export default CreateTask
