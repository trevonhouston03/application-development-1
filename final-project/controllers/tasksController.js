const db = require("../db");

exports.getTasks = (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        error: {
          code: "SERVER_ERROR",
          message: "Database error."
        }
      });
    }

    res.json(rows);
  });
};

exports.getTaskById = (req, res) => {
  const id = req.params.id;

  db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, task) => {
    if (!task) {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "Task not found."
        }
      });
    }

    const isAdmin = req.session.user.role === "admin";
    const isOwner = req.session.user.email === task.ownerEmail;

    if (!isAdmin && !isOwner) {
      return res.status(403).json({
        error: {
          code: "FORBIDDEN",
          message: "You do not own this task."
        }
      });
    }

    res.json(task);
  });
};

exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "Title is required."
      }
    });
  }

  db.run(
    "INSERT INTO tasks (title, completed, ownerEmail) VALUES (?, ?, ?)",
    [title, 0, req.session.user.email],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: {
            code: "SERVER_ERROR",
            message: "Could not create task."
          }
        });
      }

      res.status(201).json({
        id: this.lastID,
        title,
        completed: 0,
        ownerEmail: req.session.user.email
      });
    }
  );
};

exports.updateTask = (req, res) => {
  const id = req.params.id;
  const { title, completed } = req.body;

  db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, task) => {
    if (!task) {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "Task not found."
        }
      });
    }

    const isAdmin = req.session.user.role === "admin";
    const isOwner = req.session.user.email === task.ownerEmail;

    if (!isAdmin && !isOwner) {
      return res.status(403).json({
        error: {
          code: "FORBIDDEN",
          message: "You do not own this task."
        }
      });
    }

    db.run(
      "UPDATE tasks SET title = ?, completed = ? WHERE id = ?",
      [title, completed, id],
      function (err) {
        if (err) {
          return res.status(500).json({
            error: {
              code: "SERVER_ERROR",
              message: "Could not update task."
            }
          });
        }

        res.json({
          message: "Task updated."
        });
      }
    );
  });
};

exports.deleteTask = (req, res) => {
  const id = req.params.id;

  db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, task) => {
    if (!task) {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "Task not found."
        }
      });
    }

    const isAdmin = req.session.user.role === "admin";
    const isOwner = req.session.user.email === task.ownerEmail;

    if (!isAdmin && !isOwner) {
      return res.status(403).json({
        error: {
          code: "FORBIDDEN",
          message: "You do not own this task."
        }
      });
    }

    db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
      if (err) {
        return res.status(500).json({
          error: {
            code: "SERVER_ERROR",
            message: "Could not delete task."
          }
        });
      }

      res.json({
        message: "Task deleted."
      });
    });
  });
};