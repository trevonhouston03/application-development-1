const db = require("../db");

// GET all tasks
exports.getAllTasks = (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        error: { code: "DB_ERROR", message: err.message }
      });
    }
    res.json(rows);
  });
};

// GET one task
exports.getTaskById = (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({
        error: { code: "DB_ERROR", message: err.message }
      });
    }

    if (!row) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "Task not found" }
      });
    }

    res.json(row);
  });
};

// POST task
exports.createTask = (req, res) => {
  const { title, status, project_id } = req.body;

  if (!title || !status) {
    return res.status(400).json({
      error: { code: "INVALID_INPUT", message: "title and status required" }
    });
  }

  db.run(
    "INSERT INTO tasks (title, status, project_id) VALUES (?, ?, ?)",
    [title, status, project_id],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: { code: "DB_ERROR", message: err.message }
        });
      }

      res.status(201).json({
        id: this.lastID,
        title,
        status,
        project_id
      });
    }
  );
};

// PATCH task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;

  db.run(
    "UPDATE tasks SET title = ?, status = ? WHERE id = ?",
    [title, status, id],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: { code: "DB_ERROR", message: err.message }
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          error: { code: "NOT_FOUND", message: "Task not found" }
        });
      }

      res.json({ message: "Task updated" });
    }
  );
};

// DELETE task
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({
        error: { code: "DB_ERROR", message: err.message }
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        error: { code: "NOT_FOUND", message: "Task not found" }
      });
    }

    res.json({ message: "Task deleted" });
  });
};