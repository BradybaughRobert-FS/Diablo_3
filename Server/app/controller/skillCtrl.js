const Skill = require('../models/Skills'); // Ensure this matches your filename exactly

// Get all skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find({});
        res.status(200).json({
            success: true,
            message: "GET all skills",
            data: skills,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

// Get a skill by ID
const getSkillById = async (req, res) => {
    const { id } = req.params;
    try {
        const skill = await Skill.findById(id);
        if (!skill) {
            return res.status(404).json({
                success: false,
                message: `Skill with ID: ${id} not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: `GET skill with ID: ${id}`,
            data: skill,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

// Create a new skill
const createSkill = async (req, res) => {
    const { skillName, classType, requiredLevel, description, runeOptions } = req.body;

    console.log("Received skill data:", req.body); // Log the incoming skill data

    // Validate input
    if (!skillName || !classType || !requiredLevel) {
        return res.status(400).json({
            success: false,
            message: "skillName, classType, and requiredLevel are required",
        });
    }

    try {
        const newSkill = new Skill({
            skillName,
            classType,
            requiredLevel,
            description,
            runeOptions,
        });

        const savedSkill = await newSkill.save();
        console.log("Skill saved:", savedSkill); // Log the saved skill

        res.status(201).json({
            success: true,
            message: "Skill created",
            data: savedSkill,
        });
    } catch (error) {
        console.error("Error saving skill:", error); // Log any errors
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};


// Update a skill by ID
const updateSkill = async (req, res) => {
    const { id } = req.params;
    const trimmedId = id.trim(); // Trim any whitespace/newlines

    const { skillName, classType, requiredLevel, description, runeOptions } = req.body;

    // Validate input
    if (!skillName || !classType || !requiredLevel) {
        return res.status(400).json({
            success: false,
            message: "skillName, classType, and requiredLevel are required",
        });
    }

    try {
        const updatedSkill = await Skill.findByIdAndUpdate(
            trimmedId,
            { skillName, classType, requiredLevel, description, runeOptions },
            { new: true, runValidators: true }
        );

        if (!updatedSkill) {
            return res.status(404).json({
                success: false,
                message: `Skill with ID: ${trimmedId} not found`,
            });
        }

        res.status(200).json({
            success: true,
            message: `Skill with ID: ${trimmedId} updated`,
            data: updatedSkill,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};


// Delete a skill by ID
const deleteSkill = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSkill = await Skill.findByIdAndDelete(id);
        if (!deletedSkill) {
            return res.status(404).json({
                success: false,
                message: `Skill with ID: ${id} not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: `Skill with ID: ${id} deleted`,
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
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill,
};
