"use client"

import { MdDelete } from "react-icons/md"
import { FaRegEdit } from "react-icons/fa"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function DeleteIcon({ id, title }: { id: number; title: string }) {
  const router = useRouter()
  const removeTask = async () => {
    const confirmed = confirm(`Are you sure, you want to delete " ${title}"?`)
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/task/?id=${id}`, {
        method: "DELETE",
      })
      if (res.ok) {
        router.refresh()
      }
    }
  }
  return (
    <div onClick={removeTask}>
      <MdDelete size={20} className="hover:cursor-pointer text-red-500" />
    </div>
  )
}

export function UpdateIcon({ id }: { id: number }) {
  return (
    <Link href={`/update/${id}`}>
      <FaRegEdit size={20} className="text-sky-500 hover:cursor-pointer" />
    </Link>
  )
}
