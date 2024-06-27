const Router = require("express").Router;

const router = Router();

const taskController = require("../controllers/taskController");

router.get("/task/create", taskController.viewCreate);

router.post("/task", taskController.create);

router.get("/", taskController.viewRead);

router.get("/task", taskController.readList);

router.get("/task/:id", taskController.read);

router.get("/task/update/:id", taskController.viewUpdate);

router.post("/task/:id", taskController.update);

router.get("/task/delete/:id", taskController.delete);

router.delete("/task/:id", taskController.delete);

module.exports = router;
