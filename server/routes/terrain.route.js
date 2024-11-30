const router = require("express").Router();
const TerrainController = require("../controllers/terrain.controller");
const admin = require("../middlewares/admin.middleware");
const chef = require("../middlewares/chef.middleware");
const chefAdjoint = require("../middlewares/chef.adjoint.middleware");
const agent = require("../middlewares/agent.middleware");
const client = require("../middlewares/client.middleware");

router.get("/", TerrainController.getAllTerrains);
router.get("/:id", TerrainController.getIdTerrain);

router.put(
	"/prixTerrain/:id", 
	TerrainController.ajoutPrixDuTerrain
);
router.put("/:id",  TerrainController.updateTerrain);

router.post(
	"/le_Terrain/", 
	TerrainController.le_Terrain
);
router.post("/",  TerrainController.addTerrain);
router.post(
	"/recherche", 
	TerrainController.searchTerrain
);

module.exports = router;
