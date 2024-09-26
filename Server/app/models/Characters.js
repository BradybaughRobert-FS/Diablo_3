const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // Removes whitespace from both ends of a string
    },
    classType: {
        type: String,
        required: true,
        enum: ["Barbarian", "Crusader", "Demon Hunter", "Monk", "Necromancer", "Witch Doctor", "Wizard"], // Restrict values to Diablo 3 classes
    },
    level: {
        type: Number,
        required: true,
        min: 1, // Minimum level
        max: 70 // Max level in Diablo 3
    }
}, { timestamps: true }); // Automatically adds 'createdAt' and 'updatedAt' fields

// Create and export the model based on the schema
module.exports = mongoose.model('Character', characterSchema);
