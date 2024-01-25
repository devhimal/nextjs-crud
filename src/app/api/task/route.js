import { NextResponse } from "next/server"

import ConnectDB from "@/libs/mongodb"
import Task from "@/models/task"

export async function POST(request) {
  const { title, description } = await request.json()
  await ConnectDB()
  await Task.create({ title, description })
  return NextResponse.json(
    { message: "The date has been added to the your database collection" },
    { status: 201 }
  )
}

export async function GET() {
  await ConnectDB()
  const tasks = await Task.find()
  return NextResponse.json({ tasks })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id")
  await ConnectDB()
  await Task.findByIdAndDelete(id)
  return NextResponse.json(
    { message: "The task has been successfully deleted" },
    { status: 200 }
  )
}
