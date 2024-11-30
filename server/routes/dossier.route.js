const router = require("express").Router();
const DossierController = require("../controllers/dossier.controller");
const chefAdjoint = require("../middlewares/chef.adjoint.middleware");
const agent = require("../middlewares/agent.middleware");
const client = require("../middlewares/client.middleware");

router.get("/", DossierController.getAllDossiers);
router.get("/nouvelledemande/", DossierController.getDossiersNouvelleDemande);
router.get("/historique/:id", DossierController.getHistoDossier);
router.get("/recherche/:valeur", DossierController.searchDossier);
router.get("/:id", DossierController.getIdDossier);

router.post("/mesDossiers/", DossierController.getMesDossiers);
router.post("/mesDossiers/Usagers/", DossierController.getMesDossiersUsagers);
router.post("/mesDossiers/recherche/", DossierController.searchMonDossier);
router.post("/", DossierController.addDossier);

router.put("/avc/:id", DossierController.avortementDossier);
router.put("/autoUpD/", DossierController.updateAutoDossier);
router.put("/:id", DossierController.updateDossier);

module.exports = router;
