const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Skill schema
const skillSchema = new Schema({
  skillName: {
    type: String,
    required: true
  },
  classType: {
    type: String,
    required: true,
    enum: ['Barbarian', 'Crusader', 'Demon Hunter', 'Monk', 'Necromancer', 'Witch Doctor', 'Wizard'], // Add all the class types
  },
  requiredLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 70 // Assuming level cap is 70
  },
  description: {
    type: String
  },
  runeOptions: {
    type: [String], // Array of strings for rune options
    default: []
  }
});

// Create the Skill model
const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
