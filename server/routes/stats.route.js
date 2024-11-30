const router = require("express").Router();
const StatsController = require("../controllers/stats.controller");
const agent = require("../middlewares/agent.middleware");
const client = require("../middlewares/client.middleware");

router.get(
  "/all_stats_procedure_month/", 
  StatsController.getAllStatsProcedureByMonth
);
router.get(
  "/stats_temps_perdu_procedure/", 
  StatsController.getTempsPerduByProcedure
);
router.get(
  "/stats_sigle/", 
  StatsController.getStatsBySigle
);

router.get(
  "/stats_temps_perdu_dossier_procedure/:id", 
  StatsController.getTempsPerduOfDossierByProcedure
);

module.exports = router;
