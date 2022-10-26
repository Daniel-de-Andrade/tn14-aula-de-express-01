const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/produtos");

router.get("/promo", controller.showPromos);
router.get("/add", controller.add);
router.get("/edit/:id", controller.edit);
router.get("/exclude/:id", controller.exclude);
router.get("/:id", controller.show);
router.get("/", controller.showAll);

module.exports = router;
