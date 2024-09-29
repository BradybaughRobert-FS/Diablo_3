const Character = require("../models/characters");
const { getAvailableSkills } = require('../helpers/skillHelper'); // Import the helper function

// Get all characters
const getAllCharacters = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 characters per page
        const skip = (page - 1) * limit;

        // Extract the minLevel and maxLevel from query string
        const minLevel = parseInt(req.query.minLevel) || 1; // Default min level is 1
        const maxLevel = parseInt(req.query.maxLevel) || 70; // Default max level is 70

        // Select fields to include/exclude (example: ?fields=name,classType)
        const fields = req.query.fields ? req.query.fields.split(',').join(' ') : '';

        // Sorting (example: ?sort=level or ?sort=-name for descending order)
        const sortBy = req.query.sort ? req.query.sort : 'name'; // Default to sorting by name

        // Build the filter object
        const filter = {
            level: { $gte: minLevel, $lte: maxLevel } // Only include characters whose level is within the range
        };

        // Apply the filter, select fields, and sort
        const characters = await Character.find(filter)
            .skip(skip) // Skip the previous pages
            .limit(limit) // Limit the number of results per page
            .select(fields) // Include/exclude specific fields
            .sort(sortBy); // Sort the results

        // Get the total number of characters for pagination info
        const totalCharacters = await Character.countDocuments(filter);

        res.status(200).json({
            success: true,
            message: `GET all characters on page ${page} with levels between ${minLevel} and ${maxLevel}`,
            data: characters,
            total: totalCharacters, // Total number of characters in the current filter
            currentPage: page, // Current page number
            totalPages: Math.ceil(totalCharacters / limit) // Total number of pages based on the filtered results
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

    // Validate input
    if (!classType || !level) {
        return res.status(400).json({
            success: false,
            message: "classType and level are required",
        });
    }

    try {
        // Fetch available skills for the class and level
        const availableSkills = await getAvailableSkills(classType, level);

        // Create the new character with available skills
        const newCharacter = new Character({
            name,
            classType,
            level,
            skills: availableSkills, // Attach the skills to the character
        });

        const savedCharacter = await newCharacter.save();
        res.status(201).json({
            success: true,
            message: "Character created with available skills",
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
        // Fetch available skills for the updated class and level
        const availableSkills = await getAvailableSkills(classType, level);

        // Update the character with new data and available skills
        const updatedCharacter = await Character.findByIdAndUpdate(
            id,
            { name, classType, level, skills: availableSkills }, // Update skills based on class and level
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
            message: `Character with ID: ${id} updated with available skills`,
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
