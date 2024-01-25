import UpdateForm from "@/components/atomic/Update/UpdateForm"
import React from "react"

const updateData = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/api/task/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to update the task")
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const Update = async ({ params }: { params: { id: number } }) => {
  const { id } = params
  const { filteredTask } = await updateData(id)
  const { title, description } = filteredTask
  return <UpdateForm id={id} title={title} desc={description} />
}

export default Update
