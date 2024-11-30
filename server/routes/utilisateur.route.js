const router = require("express").Router();
const utilisateurController = require("../controllers/utilisateur.controller");
const admin = require("../middlewares/admin.middleware");
const chef = require("../middlewares/chef.middleware");
const chefAdjoint = require("../middlewares/chef.adjoint.middleware");
const agent = require("../middlewares/agent.middleware");
const client = require("../middlewares/client.middleware");

router.post("/seConnecter", utilisateurController.loginUtilisateur);
router.post("/", utilisateurController.addUtilisateur);

router.get("/", utilisateurController.getAllUtilisateurs);
router.get("/attenteActivation/", utilisateurController.getAttenteActivation);
router.get(
  "/liseAttenteActivation/",
  utilisateurController.getAllAttenteActivation
);
router.get(
  "/numeroCompte/",
  utilisateurController.getLastNumeroCompteUtilisateur
);
router.get("/:id", utilisateurController.getIdUtilisateur);
router.get(
  "/recherche/:valeur",
  utilisateurController.searchUtilisateurByParams
);

router.put("/:id", utilisateurController.updateUtilisateur);
router.put(
  "/admin/:id",
  utilisateurController.updateUtilisateurByAdministrateur
);
router.put("/statu/:id", utilisateurController.updateUtilisateurStatu);
router.put("/photoPDP/:id", utilisateurController.addPhotoPdp);

router.delete("/:id", utilisateurController.deleteUtilisateur);

module.exports = router;
