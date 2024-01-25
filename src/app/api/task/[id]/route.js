import ConnectDB from "@/libs/mongodb"
import Task from "@/models/task"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await ConnectDB()
  await Task.findByIdAndUpdate(id, { title, description })
  return NextResponse.json(
    { message: "The task has been upadated" },
    { status: 200 }
  )
}

export async function GET(request, { params }) {
  const { id } = params
  await ConnectDB()
  const filteredTask = await Task.findOne({ _id: id })
  return NextResponse.json({ filteredTask }, { status: 200 })
}
