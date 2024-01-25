import { mongoose, Schema } from "mongoose"

const taskSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
)

const Task = mongoose.models.Tasks || mongoose.model("Tasks", taskSchema)
export default Task
