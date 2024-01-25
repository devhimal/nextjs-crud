"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

const UpdateForm = ({
  id,
  title,
  desc,
}: {
  id: number
  title: string
  desc: string
}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(desc)
  const router = useRouter()

  const submitHandle = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      if (!res.ok) {
        throw new Error("There is problem in updating data")
      }
      router.push("/")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={submitHandle} className="flex flex-col gap-4">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Enter task title"
        required
        className="w-full sm:w-[50%] py-2 px-4 border border-slate-300 rounded-sm focus:outline-none focus:border-sky-500"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Enter task description"
        className="w-full sm:w-[50%] py-2 px-4 border border-slate-300 rounded-sm focus:outline-none focus:border-sky-500"
      />
      <button
        type="submit"
        className="border border-sky-500 rounded-sm hover:border-none  hover:bg-sky-500 hover:text-white hover:transition-all hover:delay-150 w-fit px-4 py-2"
      >
        Confirm Edit
      </button>
    </form>
  )
}

export default UpdateForm
