const taskModel = require("../models/storeModel");

class TaskController {

viewRead(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }

viewCreate(req, res) {
    return res.status(200).render("./task/task_create", { title: "Adicionar Tarefa" });
  }

viewUpdate(req, res) {
    const { id } = req.params;
    const task = taskModel.read(id);
    return task
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./task/task_update", { title: "Atualizar Tarefa", tasks: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

readList(req, res) {
    const tasksList = taskModel.readList();
    return tasksList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./task/task_read", { title: "Tarefas", tasks: result })
          : res.status(200).render("./task/task_read", { title: "Tarefas", tasks: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  read(req, res) {
    const { id } = req.params;
    const task = taskModel.read(id);
    return task
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./task/task_read", { title: "Tarefas", tasks: result })
          : res.status(200).render("./task/task_read", { title: "Tarefas", tasks: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

create(req, res) {
    const newTask = req.body;
    const task = taskModel.create(newTask);
    return task
      .then((result) => res.status(200).send("<script> alert('Tarefa criada com sucesso!'); window.location='/task' </script>"))
      .catch((error) => res.status(400).send(error.message));    
  }

update(req, res) {
    const { id } = req.params;
    const updatedTask = req.body;
    const task = taskModel.update(updatedTask, id);
    return task
      .then((result) => res.status(200).send("<script> alert('Tarefa atualizada com sucesso!'); window.location='../../task' </script>"))
      .catch((error) => res.status(400).send(error.message));   
  }

delete(req, res) {
    const { id } = req.params;
    const task = taskModel.delete(id);
    return task
      .then((result) => res.status(200).send("<script> alert('Tarefa excluída com sucesso!'); window.location='../../task' </script>"))
      .catch((error) => res.status(400).send(error.message));  
  }
}

module.exports = new TaskController();
