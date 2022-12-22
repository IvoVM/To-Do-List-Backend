const Task = require("./database");
const express = require("express");
const app = express();

app.get("/api/tasks", async (req, res) => {
  let task = await Task.find();

  return res.json({
    status: "Getting Task",
    task,
  });
});
app.post("/api/tasks", async (req, res) => {
  let task = await Task.create(req.body);
  return res.json({
    status: "Task saved successfully",
  });
});
app.delete("/api/tasks/:id", async (req, res) => {
  let id = req.params.id;
  await Task.findByIdAndRemove(id);
  return res.json({
    status: "Task removed  successfully",
  });
});
app.put("/api/tasks/:id", async (req, res) => {
  let id = req.params.id;
  await Task.findByIdAndUpdate(id, req.body);
  return res.json({
    status: "Task updated successfully",
    id,
  });
});
module.exports = app;
