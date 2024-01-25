import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-800 text-[#fff] w-full px-10 py-6">
      <Link href="/">Next Crud</Link>
      <Link
        href={"/create"}
        className="bg-white text-[#000] py-2 px-4 rounded-sm hover:bg-sky-500 hover:text-white hover:delay-150 hover:transition-all "
      >
        Create Task
      </Link>
    </div>
  )
}

export default NavBar
