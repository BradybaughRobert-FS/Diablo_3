const Character = require("../models/characters");

// Get all characters with pagination
const getAllCharacters = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 characters per page
        const skip = (page - 1) * limit;

        const characters = await Character.find({})
            .skip(skip) // Skip the previous pages
            .limit(limit); // Limit the number of results per page

        // Get the total number of characters for pagination info
        const totalCharacters = await Character.countDocuments();

        res.status(200).json({
            success: true,
            message: `GET all characters on page ${page}`,
            data: characters,
            total: totalCharacters, // Total number of characters
            currentPage: page, // Current page number
            totalPages: Math.ceil(totalCharacters / limit), // Total number of pages
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

// Get a character by ID
const getCharacterById = async (req, res) => {
    const { id } = req.params;
    try {
        const character = await Character.findById(id);
        if (!character) {
            return res.status(404).json({
                success: false,
                message: `Character with ID: ${id} not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: `GET character with ID: ${id}`,
            data: character,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

// Create a character
const createCharacter = async (req, res) => {
    const { name, classType, level } = req.body;

    // Log the incoming data in a more readable format
    console.log("data >>>", JSON.stringify({ name, classType, level }, null, 2));

    // Validate input
    if (!classType || !level) {
        return res.status(400).json({
            success: false,
            message: "classType and level are required",
        });
    }

    try {
        const newCharacter = new Character({
            name,
            classType,
            level,
        });

        const savedCharacter = await newCharacter.save();
        res.status(201).json({
            success: true,
            message: "Character created",
            data: savedCharacter,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

// Update a character by ID
const updateCharacter = async (req, res) => {
    const { id } = req.params;
    const { name, classType, level } = req.body;

    // Validate input
    if (!classType || !level) {
        return res.status(400).json({
            success: false,
            message: "classType and level are required",
        });
    }

    try {
        const updatedCharacter = await Character.findByIdAndUpdate(
            id,
            { name, classType, level },
            { new: true, runValidators: true } // Return the updated document and enforce validation
        );

        if (!updatedCharacter) {
            return res.status(404).json({
                success: false,
                message: `Character with ID: ${id} not found`,
            });
        }

        res.status(200).json({
            success: true,
            message: `Character with ID: ${id} updated`,
            data: updatedCharacter,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

// Partially update a character by ID
const patchCharacter = async (req, res) => {
    const { id } = req.params;
    const { name, classType, level } = req.body;
    const updates = {};

    if (name) updates.name = name;
    if (classType) updates.classType = classType;
    if (level) updates.level = level;

    if (Object.keys(updates).length === 0) {
        return res.status(400).json({
            success: false,
            message: "No valid fields provided for update",
        });
    }

    try {
        const updatedCharacter = await Character.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true } // Return the updated document and enforce validation
        );

        if (!updatedCharacter) {
            return res.status(404).json({
                success: false,
                message: `Character with ID: ${id} not found`,
            });
        }

        res.status(200).json({
            success: true,
            message: `Character with ID: ${id} partially updated`,
            data: updatedCharacter,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

// Delete a character by ID
const deleteCharacter = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCharacter = await Character.findByIdAndDelete(id);

        if (!deletedCharacter) {
            return res.status(404).json({
                success: false,
                message: `Character with ID: ${id} not found`,
            });
        }

        res.status(200).json({
            success: true,
            message: `Character with ID: ${id} deleted`,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
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
