import TaskLists from "@/components/taskLists/TaskLists"
import Image from "next/image"

export default function Home() {
  return (
    <div className="px-10 text-[#000]">
      <TaskLists />
    </div>
  )
}
