const router = require("express").Router();
const requerantController = require("../controllers/requerant.controller");
const agent = require("../middlewares/agent.middleware");
const chefAdjoint = require("../middlewares/chef.middleware");

router.post("/", requerantController.addRequerant);

router.get("/", requerantController.getAllRequerants);
router.get("/:id", requerantController.getIdRequerant);
router.get("/recherche/:valeur", requerantController.searchRequerant);
router.get("/apercu/:valeur", requerantController.apercuRequerant);

router.put("/:id", requerantController.updateRequerant);

router.delete("/:id", requerantController.deleteRequerant);

module.exports = router;
