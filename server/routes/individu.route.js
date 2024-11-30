const router = require("express").Router();
const IndividuController = require("../controllers/individu.controller");
const agent = require("../middlewares/agent.middleware");
const chefAdjoint = require("../middlewares/chef.middleware");

router.post("/", IndividuController.addIndividu);

router.put("/:cin", IndividuController.updateIndividu);

router.get("/", IndividuController.getAllIndividus);
router.get("/recherche/:valeur", IndividuController.searchIndividu);
router.get("/:cin", IndividuController.getCinIndividu);
router.get("/apercu/:valeur", IndividuController.apercuIndividu);

router.delete("/:cin", IndividuController.deleteIndividu);

module.exports = router;
