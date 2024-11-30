const router = require("express").Router();
const HistoriqueController = require("../controllers/historique.controller");
const agent = require("../middlewares/agent.middleware");
const client = require("../middlewares/client.middleware");

router.post("/", HistoriqueController.addHistorique);
router.post("/histoND/", HistoriqueController.addHistoNewDemande);
router.post("/autoProcedure/", HistoriqueController.addAutoHistorique);

router.get("/", HistoriqueController.getAllHistoriques);
router.get("/C_ND/", HistoriqueController.getCahierNouvelleDemande);
router.get("/C_RDV/", HistoriqueController.getCahierRendezVous);
router.get("/C_I/", HistoriqueController.getCahierInterne);
router.get("/C_D/", HistoriqueController.getCahierDepart);
router.get("/C_A/", HistoriqueController.getCahierArriver);
router.get("/histoDossier/:id", HistoriqueController.getHistoriqueDossier);

router.get("/:id", HistoriqueController.getIdHistorique);

router.put("/:id", HistoriqueController.updateHistorique);

router.put("/next/:id", HistoriqueController.nextProcedureHistorique);

router.put("/retour/:id", HistoriqueController.retourProcedureHistorique);

router.get("/C_ND/recherche/:valeur", HistoriqueController.searchHistorique);
router.get(
  "/C_RDV/recherche/:valeur",
  HistoriqueController.searchHistoriqueRDV
);
router.get("/C_I/recherche/:valeur", HistoriqueController.searchHistorique);
router.get("/C_D/recherche/:valeur", HistoriqueController.searchHistorique);
router.get("/C_A/recherche/:valeur", HistoriqueController.searchHistorique);

module.exports = router;
