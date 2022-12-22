const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://0.0.0.0:27017/to-do-list")
  .then((db) => console.log("base de datos conectada"))
  .catch((err) => console.log(err));

const taskSchema = new mongoose.Schema({
  task: { type: String, require: true },
  completed: { type: Boolean, require: true },
});
const Task = new mongoose.model("tasks", taskSchema);
module.exports = Task;
