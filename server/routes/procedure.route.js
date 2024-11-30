const router = require("express").Router();
const ProcedureController = require("../controllers/procedure.controller");
const client = require("../middlewares/client.middleware");

router.post("/", ProcedureController.addProcedure);

router.get("/", ProcedureController.getAllProcedures);
router.get("/:id", ProcedureController.getIdProcedure);
router.get("/recherche/:valeur", ProcedureController.searchProcedure);

router.put("/:id", ProcedureController.updateProcedure);

module.exports = router;
