const express = require('express');
const router = express.Router();
const skillCtrl = require(`../controller/skillCtrl`);

// Routes for skill operations
router.get("/", skillCtrl.getAllSkills);
router.get("/:id", skillCtrl.getSkillById);
router.post("/", skillCtrl.createSkill);
router.put("/:id", skillCtrl.updateSkill);
router.delete("/:id", skillCtrl.deleteSkill);

module.exports = router;
