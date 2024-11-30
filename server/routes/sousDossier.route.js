const router = require("express").Router();
const SousDossierController = require("../controllers/sousDossier.controller");
const agent = require("../middlewares/agent.middleware");
const admin = require("../middlewares/admin.middleware");
const chef = require("../middlewares/chef.middleware");
const chefAdjoint = require("../middlewares/chef.adjoint.middleware");
const client = require("../middlewares/client.middleware");

router.get("/", SousDossierController.getAllSousDossiersOfDossier);

router.get("/nbAttenteVISA/", SousDossierController.getNbAttenteVISA);
router.get("/attenteVISA/", SousDossierController.getAllAttenteVISA);

router.get("/nbAttentePREVISA/", SousDossierController.getNbAttentePREVISA);
router.get("/attentePREVISA/", SousDossierController.getAllAttentePREVISA);

router.get(
  "/lastSousDossier/:id",
  SousDossierController.getLastSousDossierOfDossier
);
router.get("/decompte/:id", SousDossierController.getDecompte);
router.get("/:id", SousDossierController.getIdSousDossier);

router.post("/", SousDossierController.addSousDossier);

router.put("/:id", SousDossierController.updateSousDossier);

module.exports = router;
