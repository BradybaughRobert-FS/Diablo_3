// Controller functions for character operations

// Get all characters
const getAllCharacters = (req, res) => {
    res.status(200).json({
        success: true,
        message: "GET all characters",
    });
};

// Get a character by ID
const getCharacterById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `GET character with ID: ${id}`,
        id,
    });
};

// Create a new character
const createCharacter = (req, res) => {
    const { name, classType } = req.body;

    // Validate input
    if (!name || !classType) {
        return res.status(400).json({
            success: false,
            message: "Name and classType are required",
        });
    }

    // Example response for character creation
    res.status(201).json({
        success: true,
        message: "Character created",
        data: { name, classType },
    });
};

// Update a character by ID
const updateCharacter = (req, res) => {
    const { id } = req.params;
    const { name, classType } = req.body;

    // Validate input
    if (!name || !classType) {
        return res.status(400).json({
            success: false,
            message: "Name and classType are required",
        });
    }

    // Example response for character update
    res.status(200).json({
        success: true,
        message: `Character with ID: ${id} updated`,
        data: { name, classType },
    });
};

// Partially update a character by ID
const patchCharacter = (req, res) => {
    const { id } = req.params;
    const { name, classType } = req.body;
    const updates = {};

    if (name) updates.name = name;
    if (classType) updates.classType = classType;

    if (Object.keys(updates).length === 0) {
        return res.status(400).json({
            success: false,
            message: "No valid fields provided for update",
        });
    }

    res.status(200).json({
        success: true,
        message: `Character with ID: ${id} partially updated`,
        data: updates,
    });
};

// Delete a character by ID
const deleteCharacter = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        message: `Character with ID: ${id} deleted`,
    });
};

// Export all controller functions
module.exports = {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    patchCharacter,
    deleteCharacter,
};
