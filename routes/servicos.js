const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/servicos");

router.get("/adicionar", controller.adicionar);
router.get("/editar/:id", controller.editar);
router.get("/excluir/:id", controller.excluir);
router.get("/:id", controller.verUm);
router.get("/", controller.verTodos);

module.exports = router;