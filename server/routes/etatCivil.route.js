const router = require("express").Router();
const EtatCivilController = require("../controllers/etatCivil.controller");
const agent = require("../middlewares/agent.middleware");

router.post("/", EtatCivilController.addEtatCivil);

router.get("/", EtatCivilController.getAllEtatCivils);
router.get("/:id", EtatCivilController.getIdEtatCivil);

router.put("/:id", EtatCivilController.updateEtatCivil);

module.exports = router;
