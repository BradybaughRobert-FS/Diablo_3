const express = require('express');
const router = express.Router();
const {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    patchCharacter,
    deleteCharacter
} = require('../controller/charCtrl'); // Correctly import controller functions

// GET all characters
router.get("/", getAllCharacters);

// GET a character by ID
router.get("/:id", getCharacterById);

// POST to add a new character
router.post("/", createCharacter);

// PUT to update a character by ID
router.put("/:id", updateCharacter);

// PATCH to update specific fields of a character by ID
router.patch("/:id", patchCharacter);

// DELETE a character by ID
router.delete("/:id", deleteCharacter);

module.exports = router;
