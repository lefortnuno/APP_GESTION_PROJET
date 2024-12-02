const router = require("express").Router();
const BureauController = require("../controllers/bureau.controller");
const client = require("../middlewares/client.middleware");

router.post("/", BureauController.addBureau);

router.get("/", BureauController.getAllBureau);
router.get("/glitch/", BureauController.getAllBureau);
router.get("/:id", BureauController.getIdBureau);
router.get("/recherche/:valeur", BureauController.searchBureau);

router.put("/:id", BureauController.updateBureau);

module.exports = router;
